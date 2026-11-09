import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get(
                    "http://localhost:3002/auth/me",
                    { withCredentials: true }
                );

                setIsAuthenticated(true);

            } catch (error) {
                setIsAuthenticated(false);
                window.location.href = "http://localhost:3000/login";
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return <h3>Checking authentication...</h3>;
    }

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;