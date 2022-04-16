import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Thanks for taking interest on me. I hope you wont be disappointed.
            <br />
            <br />
            I am just another human being who loves building tech that solves real world problems.
            I love code refactoring and optimisation. 
            <br />
            <br />
            Apart from my day to day job, I love
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Watching sports, mostly football (or soccer 😀 )
            </li>
            <li className="about-activity">
              <ImPointRight />  Doing hobby projects
            </li>
            <li className="about-activity">
              <ImPointRight />  Playing FIFA
            </li>
            <li className="about-activity">
              <ImPointRight />  Watching movies (mostly historical)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
