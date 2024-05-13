import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WebQuiz from "../../Assets/Projects/WebQuiz.PNG";
import AIChess from "../../Assets/Projects/AIChess.PNG";
import FSAH from "../../Assets/Projects/FSAH.png";
import PocketMechanic from "../../Assets/Projects/scanner.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIChess}
              isBlog={false}
              title="AI Chess"
              description="Ai chess is a game where you are able to play against an Ai or if you don't wanna play you can watch two Ai computers go against each other."
              ghLink="https://github.com/aluisrios10/AI-Chess"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FSAH}
              isBlog={false}
              title="FSAH - Financial Helper"
              description="Many students enter college aiming for a career but graduate burdened with substantial debt, complicating their start in life. The difficulty in accessing financial advisors, who are often booked for weeks or months, exacerbates this issue, as students struggle to obtain the necessary guidance."
              ghLink="https://github.com/aluisrios/CPSC-491-FSAH-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebQuiz}
              isBlog={false}
              title="WebQuiz"
              description="WebQuiz is a place where you can login, or signup if you are new and be able to take some of our many quizzes."
              ghLink="https://github.com/danny-garxia/WebQuiz"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PocketMechanic}
              isBlog={false}
              title="PocketMechanic"
              description="App for software engineering class Goal is to create a mobile app that can assist users when servicing their vehicle."
              ghLink="https://github.com/rocketmanZ/PocketMechanic"       
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
