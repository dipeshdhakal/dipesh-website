import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiSwift,
  SiFastlane,
  SiSqlite,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwift />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastlane />
      </Col>
    </Row>
  );
}

export default Techstack;
