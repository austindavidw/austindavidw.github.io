import React from "react";
import { TypeAnimation } from "react-type-animation";
import laptopImg from "../assets/laptop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image rounded-5"
        style={{
          backgroundImage: `url(${laptopImg})`,
          height: "90vh",

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="mask bg-transparent mt-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white sticky-md-top z-1">
              <h1
                className="mb-3 main-heading"
                style={{ fontSize: "6em", fontFamily: "Lato, sans-serif" }}
              >
                I'm Austin
              </h1>
              <div className="mb-4">
                <TypeAnimation
                  sequence={[
                    "I am a Developer",
                    2500,
                    "I am an Extrovert",
                    2500,
                    "I am a Foodie",
                    2500,
                  ]}
                  speed={50}
                  style={{
                    fontSize: "2em",
                    color: "white",
                    fontFamily: "Lato, sans-serif",
                  }}
                  repeat={Infinity}
                />
              </div>

              <a
                className="btn btn-outline-light btn-lg"
                href="#CTA"
                role="button"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Contact Me <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
