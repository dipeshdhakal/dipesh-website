import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaSourcetree } from "react-icons/fa";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiXcode,
  SiFigma,
  SiAppstore,
  SiFastlane,
  SiSwift,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAppstore />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastlane />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSourcetree />
      </Col>
    </Row>
  );
}

export default Toolstack;
