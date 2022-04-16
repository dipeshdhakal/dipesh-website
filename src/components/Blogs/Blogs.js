import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";


function Blogs() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 className="project-heading">
          My <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Hmmmm, my blogs are very private to me. Not sure i want to share it. Let me think...
        </p>
      </Container>
    </div>
  );
}

export default Blogs;