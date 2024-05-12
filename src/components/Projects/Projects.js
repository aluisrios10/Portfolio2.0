import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WebQuiz from "../../Assets/Projects/WebQuiz.PNG";
import AIChess from "../../Assets/Projects/AIChess.PNG";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              description="Ai chess is a game where you are able to play against an Ai or if you don't wanna play you can watch two Ai computers go aganist each other. It has some features like an undo or redo so you could have the advantage."
              ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebQuiz}
              isBlog={false}
              title="WebQuiz"
              description="WebQuiz is a place where you can login, or signup if you are a new and be able to take some of our many quizzes, as well it would tell you which questions you miss and will give you your score in the end."
              ghLink="https://github.com/soumyajit4419/Editor.io"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebQuiz}
              isBlog={false}
              title="WebQuiz"
              description="WebQuiz is a place where you can login, or signup if you are a new and be able to take some of our many quizzes, as well it would tell you which questions you miss and will give you your score in the end."
              ghLink="https://github.com/soumyajit4419/Editor.io"       
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
