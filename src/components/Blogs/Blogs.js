import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Blogs() {

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
          
        </div>
      </Container>
    </div>
  );
}

export default Blogs;
