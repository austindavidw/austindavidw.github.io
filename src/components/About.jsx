import React from "react";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <>
      <hr class="my-5" />
      <section className="mt-5 mb-5">
        <div class="row">
          <div class="col-md-6 gx-5 mb-4 rounded-5">
            <div
              class="bg-image hover-overlay ripple shadow-2-strong mb-5"
              data-mdb-ripple-color="light"
            >
              <img
                src={profile}
                class="img-fluid rounded mx-auto d-block myPic"
                style={{ width: "50%" }}
                alt="profilepic"
              />
              <a href="#!">
                <div class="mask" style={{ backgroundColor: "white" }}></div>
              </a>
            </div>
          </div>

          <div className="col-md-6 gx-5 mb-4 bg-secondary bg-opacity-25 rounded-5 text-center">
            <h4
              className="display-5 mt-3 text-muted"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              <strong>About Me</strong>
            </h4>
            <p
              class="text-muted lead mx-auto mt-4"
              style={{
                lineHeight: 2,
                fontFamily: "Lato, sans-serif",
              }}
            >
              I am a software engineer with a background in program management.
              I am effective at using creativity and problem solving to deliver
              user-friendly products. I am known amongst colleagues for my
              attention to detail, drive to learn and focus on the big picture.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
