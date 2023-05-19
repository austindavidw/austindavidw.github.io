import React from "react";
import simonsaysgame from "../assets/simonsaysgame.png";
import keeperapp from "../assets/keeperapp.png";
import newslettersignup from "../assets/newslettersignup.png";
import blogwebsite from "../assets/blogwebsite.png";

const Projects = () => {
  return (
    <>
      <hr class="my-5" />
      <section class="text-center ">
        <h4
          class="mb-5 bg-transparent display-5 text-muted"
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          <strong>My Projects</strong>
        </h4>

        {/* First Project */}

        <div class="row allCards">
          <div class="col-lg-6 col-md-6 mb-4">
            <div class="card rounded-5 h-100">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src={simonsaysgame}
                  class="img-fluid rounded-top-5"
                  alt="simon says game"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(200, 200, 200, 255)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body bg-secondary bg-opacity-25 rounded-bottom-5">
                <h5
                  class="card-title text-muted"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Simon Says Game
                </h5>
                <p
                  class="card-text text-muted"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  A childhood favorite utilizing javascript with jQeury, have a
                  go!
                </p>
                <div className="d-grid gap-2 d-lg-block">
                  <a
                    href="https://github.com/austindavidw/Simonsaysgame"
                    class="btn btn-outline-dark mx-2"
                    role={"button"}
                  >
                    Code
                  </a>
                  <a
                    href="https://austindavidw.github.io/Simonsaysgame/"
                    class="btn btn-dark mx-2"
                    role={"button"}
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Second Project */}

          <div class="col-lg-6 col-md-6 mb-4">
            <div class="card rounded-5 h-100">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src={keeperapp}
                  class="img-fluid rounded-top-5"
                  alt="keeperapp"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body bg-secondary bg-opacity-25 rounded-bottom-5">
                <h5
                  class="card-title text-muted"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Notes App
                </h5>
                <p
                  class="card-text text-muted"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Note keeping application utlizing React!
                </p>
                <div className="d-grid gap-2 d-lg-block">
                  <a
                    href="https://github.com/austindavidw/note-app"
                    class="btn btn-outline-dark mx-2"
                    role={"button"}
                  >
                    Code
                  </a>
                  <a
                    href="https://austindavidw.github.io/note-app/"
                    class="btn btn-dark mx-2"
                    role={"button"}
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Third Project */}

          <div class="col-lg-6 col-md-6 mb-4">
            <div class="card rounded-5 h-100">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src={newslettersignup}
                  class="img-fluid rounded-top-5"
                  alt="newslettersignuppage"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body bg-secondary bg-opacity-25 rounded-bottom-5">
                <h5
                  class="card-title text-muted"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Newsletter Signup Page
                </h5>
                <p
                  class="card-text text-muted"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Heroku deployed website connected to Mailchimps API to capture
                  user information by use of Node.js and Express!
                </p>
                <div className="d-grid gap-2 d-lg-block">
                  <a
                    href="https://github.com/austindavidw/Newsletter-Signup"
                    class="btn btn-outline-dark mx-2"
                    role={"button"}
                  >
                    Code
                  </a>
                  <a
                    href="https://whispering-ravine-04277.herokuapp.com/"
                    class="btn btn-dark mx-2"
                    role={"button"}
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Project */}

          <div class="col-lg-6 col-md-6 mb-4">
            <div class="card rounded-5 h-100">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src={blogwebsite}
                  class="img-fluid rounded-top-5"
                  alt="newslettersignuppage"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              <div class="card-body bg-secondary bg-opacity-25 rounded-bottom-5">
                <h5
                  class="card-title text-muted"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Demo Blog Website
                </h5>
                <p
                  class="card-text text-muted"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Heroku deployed website using Node.js, Express and MongoDB for
                  the database!
                </p>
                <div className="d-grid gap-2 d-lg-block">
                  <a
                    href="https://github.com/austindavidw/blog-db-website"
                    class="btn btn-outline-dark mx-2"
                    role={"button"}
                  >
                    Code
                  </a>
                  <a
                    href="https://rocky-plains-89731.herokuapp.com/"
                    class="btn btn-dark mx-2"
                    role={"button"}
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
