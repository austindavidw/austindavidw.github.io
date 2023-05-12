import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <hr class="my-5" />
      <footer class="bg-transparent text-lg-start" style={{ color: "white" }}>
        <div class="text-center py-4 align-items-center text-muted">
          <p>Follow me on social media</p>
          <a
            href="https://github.com/austindavidw"
            class="btn btn-md btn-dark m-1"
            role="button"
            rel="nofollow"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/austin-wright-sej/"
            class="btn btn-md btn-dark m-1"
            role="button"
            rel="nofollow"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <div class="text-center p-3 bg-transparent text-muted">
          © 2023 Copyright
        </div>
      </footer>
    </>
  );
};

export default Footer;
