
const express = require("express");
const router = express.Router();
const User = require("../model/UserModel");
const authMiddleware = require("../middlewares/authMiddleware");
// SIGNUP ROUTE
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check whether all fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({
            email: email.toLowerCase().trim()
        });

        if (existingUser) {
            return res.status(409).json({
                message: "Email already registered"
            });
        }

        // Create new user
        const newUser = new User({
            name,
            email,
            password
        });

        // Password will automatically be hashed
        // by the pre-save hook in UserModel.js
        await newUser.save();

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (error) {
        console.error("Signup Error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

const jwt = require("jsonwebtoken");

// LOGIN ROUTE
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // Find user and explicitly retrieve hidden password
        const user = await User.findOne({
            email: email.toLowerCase().trim()
        }).select("+password");

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Compare entered password with hashed password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        // Store token in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error("Login Error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
});
// LOGOUT ROUTE
router.post("/logout", (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
    });

    return res.status(200).json({
        message: "Logout successful"
    });
});
// GET LOGGED-IN USER
router.get("/me", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error("Current User Error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
});
// CHECK LOGGED-IN USER
router.get("/me", authMiddleware, (req, res) => {
    return res.status(200).json({
        authenticated: true,
        user: req.user
    });
});
module.exports = router;
