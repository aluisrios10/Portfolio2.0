import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Luis Rios </span>
            from <span className="purple"> Orange County, California.</span>
            <br />
            I am currently seeking jobs in Software Engineering 
            <br />
            I have been apart of some projects and ready to use my skills to help others. 
            <br />
            <br />
            Besides from coding, some other activities that I love to do are :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on my car
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging out with my friends
            </li>
            <li className="about-activity">
              <ImPointRight /> As well as photography
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
