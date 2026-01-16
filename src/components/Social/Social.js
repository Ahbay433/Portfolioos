import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Social() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Container fluid style={{ minHeight: "100vh", paddingTop: "120px" }}>
      <Row className="justify-content-center align-items-center">

        {/* LEFT SIDE – CONTACT FORM */}
        <Col md={5} style={styles.card}>
          <p style={styles.subTitle}>GET IN TOUCH</p>
          <h1 style={styles.title}>Contact.</h1>

          <form onSubmit={handleSubmit}>
            <label style={styles.label}>Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              style={styles.input}
              required
            />

            <label style={styles.label}>Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              style={styles.input}
              required
            />

            <label style={styles.label}>Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              style={styles.textarea}
              required
            />

            <button type="submit" style={styles.button}>
              Send
            </button>
          </form>
        </Col>

        {/* RIGHT SIDE – SOCIAL MEDIA */}
        <Col md={5} style={styles.socialCard}>
          <h1 style={styles.socialTitle}>Connect With Me</h1>
          <p style={styles.socialSub}>
            Feel free to connect with me on these platforms
          </p>

          <div style={styles.iconRow}>
            <a
              href="https://github.com/Ahbay433"
              target="_blank"
              rel="noreferrer"
              style={styles.icon}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c084fc";
                e.currentTarget.style.transform = "scale(1.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <AiFillGithub />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              style={styles.icon}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c084fc";
                e.currentTarget.style.transform = "scale(1.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <AiOutlineTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/abhay-dhakne-223725293"
              target="_blank"
              rel="noreferrer"
              style={styles.icon}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c084fc";
                e.currentTarget.style.transform = "scale(1.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/abhay_dhakne_/"
              target="_blank"
              rel="noreferrer"
              style={styles.icon}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c084fc";
                e.currentTarget.style.transform = "scale(1.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <AiFillInstagram />
            </a>
          </div>

          <div style={styles.info}>
            <p>📧 <strong>abhaydhakne@gmail.com</strong></p>
            <p>📍 India 🇮🇳</p>
          </div>
        </Col>

      </Row>
    </Container>
  );
}

export default Social;

/* ================= STYLES ================= */

const styles = {
  card: {
    background: "rgba(20, 10, 40, 0.85)",
    borderRadius: "18px",
    padding: "70px",
    marginBottom: "30px",
  },

  subTitle: {
    color: "#aaa",
    letterSpacing: "2px",
    fontSize: "13px",
  },

  title: {
    color: "#fff",
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "30px",
  },

  label: {
    color: "#fff",
    marginBottom: "6px",
    display: "block",
    fontSize: "14px",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "18px",
    borderRadius: "14px",
    background: "transparent",
    border: "1.5px solid rgba(255,255,255,0.7)",
    color: "#fff",
    outline: "none",
  },

  textarea: {
    width: "100%",
    padding: "16px",
    marginBottom: "22px",
    borderRadius: "16px",
    background: "transparent",
    border: "1.5px solid rgba(255,255,255,0.7)",
    color: "#fff",
    outline: "none",
    resize: "none",
    minHeight: "150px",
  },

  button: {
    padding: "12px 30px",
    background: "#6d28d9",
    border: "none",
    borderRadius: "12px",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  },

  socialCard: {
    textAlign: "center",
    color: "#fff",
    padding: "40px",
  },

  socialTitle: {
    fontSize: "2.5rem",
    color: "#c084fc",
  },

  socialSub: {
    color: "#bbb",
    marginBottom: "30px",
  },

  iconRow: {
    display: "flex",
    justifyContent: "center",
    gap: "35px",
    fontSize: "2.8rem",
    marginBottom: "40px",
  },

  icon: {
    color: "#ffffff",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  info: {
    color: "#ccc",
    fontSize: "16px",
  },
};
