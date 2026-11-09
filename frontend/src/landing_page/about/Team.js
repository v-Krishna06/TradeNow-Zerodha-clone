
import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">About Me</h1>
      </div>

      <div
        className="row p-3 text-muted align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-md-6 p-3 text-center">
          <img
            src="media/images/prof.jpeg"
            alt="Krishna Verma"
            style={{ borderRadius: "100%", width: "50%" }}
          />

          <h4 className="mt-5">Krishna Verma</h4>
          <h6>B.Tech | BIT Mesra</h6>
        </div>

        <div className="col-md-6 p-3">
          <p>
            I'm Krishna Verma, a B.Tech Biotechnology student at
            Birla Institute of Technology, Mesra, with a strong
            interest in software development, competitive programming,
            and emerging technologies.
          </p>

          <p>
            I work with C++, C, Python, JavaScript, React.js,
            Node.js, Express.js, and databases like MongoDB and MySQL.
            I enjoy building full-stack applications and solving
            challenging Data Structures and Algorithms problems.
          </p>

          <p>
            Beyond academics and coding, I serve as the General
            Secretary of BIOTS, the biotechnology student society
            at BIT Mesra.
          </p>

          <p>
            Connect with me on{" "}
            <a
              href="https://github.com/v-Krishna06"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            /{" "}
            <a
              href="https://www.linkedin.com/in/krishna-verma-54b008367/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
