import { Link } from 'react-router-dom';
import profileImg from "../image/hero-image.jpg"
import { Button } from 'react-bootstrap';

export default function Hero() {
  return (
    <section className="bg-black text-dark py-5 min-vh-100 d-flex align-items-center" id="#hero">
      <div className="container">
        <div className="row align-items-center gy-4">
         
          <div className="col-lg-7 text-center text-lg-start mb-0">
           <h1 className="display-4 fw-bold mb-3 text-info">
            Hi,I'm <span className="text-primary">Kareem Hatem</span>
          </h1>
            <span className="badge text-primary fs-1 mt-3 p-3">
              Frontend Developer
            </span>

            <p className="text-secondary fs-4 lh-base my-3 style={{ maxWidth:'600px'}}">
              I'm a passionate Frontend Developer specializing in React and Bootstrap, building fast, responsive, and user-friendly web applications.
            </p>
            <div className="d-flex gap-3 m-4">
              <Link to="/projects" className="btn btn-primary btn-lg px-4">
                View My Work
              </Link>
              <Button
                href="https://wa.me/201027375220"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-primary"
                className="whatsapp-btn px-4 py-2 fw-semibold text-decoration-none rounded-2 d-inline-flex align-items-center justify-content-center "
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="col-lg-5 text-center">
            <img
              src={profileImg}
              alt="Kareem Hatem"
              className="img-fluid shadow-lg rounded-5 border-radius"
              style={{ maxWidth: '320px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
