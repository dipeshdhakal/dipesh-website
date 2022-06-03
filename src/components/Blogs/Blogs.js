import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Blog1 from "./Blog1";

function Blogs() {

  const onClick = () => this.props.history.push("/EnquiryResult");

  return (
    <div>
      <Container fluid className="blog-section">
        <Particle />
        <h1 className="project-heading">
          My <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white", height:"100%" }}>
          WIP...
        </p>
        <div className="blog-content">
          <Link to="/Blog1">
            <button>
              Read Blog 1 
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Blogs;
