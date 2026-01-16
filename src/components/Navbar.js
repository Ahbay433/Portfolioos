import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineShareAlt, // ✅ FIX 1: added import
} from "react-icons/ai";

import { CgFileDocument, CgGitFork } from "react-icons/cg";
// import Button from "react-bootstrap/Button"; // optional (currently commented)

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // ✅ FIX 2: scroll listener inside useEffect
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* BRAND */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand-text">
          Abhay Dhakne
        </Navbar.Brand>

        {/* TOGGLE */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() =>
            updateExpanded(expand ? false : "expanded")
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        {/* MENU */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* ✅ SOCIAL PAGE */}
            <Nav.Item>
              <Nav.Link as={Link} to="/social" onClick={() => updateExpanded(false)}>
                <AiOutlineShareAlt /> Social
              </Nav.Link>
            </Nav.Item>

            {/* GitHub button (optional – currently disabled) */}
            {/*
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Ahbay433"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork /> <AiFillStar />
              </Button>
            </Nav.Item>
            */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
