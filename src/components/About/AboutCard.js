import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Abhay Dhakne</span>{" "}
            from <span className="purple">Pune, Maharashtra, India</span>.
            <br />
            <br />
            I am currently a <span className="purple">3rd year</span>{" "}
            <span className="purple">B.E.</span> student specializing in{" "}
            <span className="purple">Data Science</span>.
            <br />
            <br />
            I am passionate about{" "}
            <span className="purple">Data Science</span>,{" "}
            <span className="purple">Web Development</span>, and{" "}
            <span className="purple">Programming</span>. I enjoy working on
            real-world projects, learning new technologies, and continuously
            improving my problem-solving skills.
            <br />
            <br />
            Apart from academics, here are a few activities I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding & Building Projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Data Science & ML Concepts 📊
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Consistency and curiosity are the keys to growth."
          </p>
          <footer className="blockquote-footer">Abhay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
