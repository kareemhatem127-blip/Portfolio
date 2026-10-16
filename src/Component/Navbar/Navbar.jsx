import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand active text-primary fs-2" to="/">Portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center align-items-center text-light" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5 gap-4 ">
            <Link className="nav-link  " aria-current="page" to="/" id="#hero">Hero</Link>
            <Link className="nav-link" to="/About" id="#about">About</Link>
            <Link className="nav-link" to="/Project" id="#project">Project</Link>
            <Link className="nav-link" to="/Skills" id="#Skills">Skills</Link>
          </div>
        </div>
        <Button
          as="a"
          href="https://wa.me/201027375220"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline-info"
          className="whatsapp-btn text-decoration-none px-4 py-2 rounded-2 fw-semibold px-4 py-2"
        >
          Contact Me
        </Button>

      </div>
    </nav>
  );
}





