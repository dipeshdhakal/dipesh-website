import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/0d/29/57/0d2957dd-be68-0f1d-5469-6624d34d5338/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp"
              isBlog={false}
              title="Frollo"
              description="Personal Finance Manager App with Account linking, Budgets, Goals, Expense reports etc"
              link="https://apps.apple.com/app/id1179563005"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/73/22/94/73229468-e32e-c295-02b0-d3c18ca0681f/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp"
              isBlog={false}
              title="Volt Bank"
              description="Banking mobile app with all banking features like KYC, onboarding, account creation, payments and cards."
              link="https://apps.apple.com/au/app/volt/id1444955456"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/1c/11/a3/1c11a327-f2a1-de7c-0053-70534fcfb20c/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp"
              isBlog={false}
              title="Pioneer Path App"
              description="Whitelabel clone of Frollo App with different theming and slightly different functionality."
              link="https://apps.apple.com/au/app/pioneer-path/id1265685277"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/a6/04/4a/a6044a97-2d17-ab53-a14f-e78a72edc9e6/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp"
              isBlog={false}
              title="AFG"
              description="Banking as a platform Volt clone app. All banking app features with PFM features on top of it."
              link="https://apps.apple.com/us/app/handl-by-afg/id1589001612"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://is2-ssl.mzstatic.com/image/thumb/Purple112/v4/77/b5/c2/77b5c247-6de4-fdc9-56ba-519b4429f261/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp"
              isBlog={false}
              title="Hamro patro"
              description="Nepalese calendar app with date conversion, media, news and many more utility."
              link="https://apps.apple.com/us/app/hamro-patro-nepali-calendar/id401074157"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/6a/04/bd/6a04bd27-d4e3-8f7a-680b-bf8ef0b8ba84/pr_source.png/460x0w.webp"
              isBlog={false}
              title="Hamro Keyboard"
              description="iOS custom keyboard with different language layour and real time transliteration."
              link="https://apps.apple.com/us/app/hamro-nepali-keyboard/id1276952753"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
