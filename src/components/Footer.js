import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",        // ✅ IMPORTANT
        zIndex: 9999,                 // ✅ ABOVE CANVAS
        pointerEvents: "auto",        // ✅ ENABLE CLICKS
        padding: "50px 0",
        background: "linear-gradient(180deg, #120015, #1b001f, #0b0010)",
        textAlign: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">

          {/* NAME */}
          <Col md={12}>
            <h2
              style={{
                color: "#ffffff",
                fontSize: "3.2rem",
                fontWeight: "700",
                marginBottom: "12px",
              }}
            >
              Abhay Dhakne
            </h2>
          </Col>

          {/* COPYRIGHT */}
          <Col md={12}>
            <p
              style={{
                color: "#ffffff",
                opacity: 0.75,
                fontSize: "1rem",
                marginBottom: "45px",
              }}
            >
              © {year} | Designed & Developed by Abhay
            </p>
          </Col>

          {/* SOCIAL ICONS */}
          <Col md={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "48px",
              }}
            >
              {[
                { Icon: AiFillGithub, link: "https://github.com/Ahbay433" },
                { Icon: AiOutlineTwitter, link: "https://twitter.com/" },
                {
                  Icon: FaLinkedinIn,
                  link: "https://www.linkedin.com/in/abhay-dhakne-223725293",
                },
                { Icon: AiFillInstagram, link: "https://www.instagram.com/" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#ffffff",
                    fontSize: "3rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff4d8d";
                    e.currentTarget.style.transform =
                      "translateY(-8px) scale(1.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
