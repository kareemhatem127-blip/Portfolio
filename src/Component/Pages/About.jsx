
export default function About() {
  return (

    <section id="about" className="bg-dark text-white py-5 ">
      <div className="container py-4">

        <div className="mb-5">
          <h6 className="text-primary text-uppercase fw-bold tracking-wider fs-1 p-2">About Me</h6>
          <h2 className="fw-bold display-6 text-light mt-4">
            Passionate Front-End Developer Crafting Exceptional Web Experiences
          </h2>
        </div>

        <div className="row g-4 align-items-center">

          <div className="col-lg-7">
            <div className="pe-lg-3 ">
              <p className="fs-5 text-light leading-relaxed mb-4">
                I'm a dedicated <span className="text-primary fw-semibold fs-4 p-2">Front-End Developer</span> currently refining my technical background as a student at <span className="text-info fw-bold fs-4 p-2">El Shorouk Academy</span>. I specialize in transforming complex designs into fast, responsive, and user-friendly web applications.
              </p>
              <p className="fs-5 text-light leading-relaxed mb-4">
                Through my practical journey, I had the privilege of working with <span className="text-primary fw-semibold p-2">iAcademy</span>, where I contributed to real-world projects and collaborated with teams to write clean, scalable, and maintainable code.
              </p>
              <p className="text-light mb-2">
                I am always eager to learn modern Front-End technologies and pay close attention to UI details to deliver peak performance.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="d-flex flex-column-reverse gap-3">
              <div className="card bg-secondary bg-opacity-10 border-secondary border-opacity-25 text-white p-3 rounded-3">
                <div className="card-body p-1">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="fs-3">🎓</span>
                    <div>
                      <h5 className="card-title mb-0 fw-bold text-primary">El Shorouk Academy</h5>
                      <small className="text-primary-emphasis">Academic Education</small>
                    </div>
                  </div>
                  <p className="card-text text-light fs-6 mb-0">
                    Studying Bis core concepts and strong software engineering fundamentals.
                  </p>
                </div>
              </div>


              <div className="card bg-secondary bg-opacity-10 border-secondary border-opacity-25 text-white p-3 rounded-3">
                <div className="card-body p-1">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <span className="fs-3">💼</span>
                    <div>
                      <h5 className="card-title mb-2 text-primary fw-bold">iAcademy</h5>
                      <small className="text-primary-emphasis">Hands-on Experience</small>
                    </div>
                  </div>
                  <p className="card-text text-light fs-6 mb-0">
                    Developed production-ready web interfaces and worked on real-world projects.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
