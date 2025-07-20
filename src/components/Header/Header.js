"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#1f1f1f",
  padding: "30px",
  zIndex: 1000,
  borderRadius: "12px",
  color: "white",
  minWidth: "300px",
  textAlign: "center",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 999,
};

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container>
        <Div1>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              textDecoration: "none",
              marginBottom: "10px",
            }}
          >
            <DiCssdeck size="3rem" color="white" />
            <Span style={{ color: "white", marginLeft: "8px" }}>Portfolio</Span>
          </Link>
        </Div1>

        {/* Scrollable menu for small screens only */}
        <Div2>
          <ul
            style={{
              display: "flex",
              gap: "20px",
              listStyle: "none",
              overflowX: "auto",
              whiteSpace: "nowrap",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className="scroll-nav"
          >
            <li>
              <Link href="#projects" passHref legacyBehavior>
                <NavLink>Projects</NavLink>
              </Link>
            </li>
            <li>
              <Link href="#tech" passHref legacyBehavior>
                <NavLink>Technologies</NavLink>
              </Link>
            </li>
            <li>
              <Link href="#about" passHref legacyBehavior>
                <NavLink style={{ whiteSpace: "nowrap" }}>About Me</NavLink>
              </Link>
            </li>
            <li>
              <Link href="#accomplishments" passHref legacyBehavior>
                <NavLink>Accomplishments</NavLink>
              </Link>
            </li>
            <li>
              <NavLink onClick={() => setShowModal(true)} style={{ cursor: "pointer" }}>
                Contact
              </NavLink>
            </li>
          </ul>
        </Div2>

        <Div3>
          <SocialIcons href="https://github.com/theprinceraj45" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/princeraj07" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/beingtheprinceraj" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </Div3>
      </Container>

      {/* Modal */}
      {showModal && (
        <>
          <div style={overlayStyle} onClick={() => setShowModal(false)} />
          <div style={modalStyle}>
            <h3>Contact Me</h3>
            <p><strong>Email:</strong> princeraj6095@gmail.com</p>
            <p><strong>Phone:</strong> +91-763385XXXX</p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/princeraj07"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4eaaff" }}
              >
                princeraj07
              </a>
            </p>
            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/beingtheprinceraj"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f94fff" }}
              >
                @beingtheprinceraj
              </a>
            </p>
            <button
              style={{
                marginTop: "15px",
                padding: "8px 16px",
                backgroundColor: "#e63946",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                color: "#fff",
              }}
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </>
      )}

      {/* CSS inside <style> tag or use global.css */}
      <style jsx>{`
        @media (min-width: 768px) {
          .scroll-nav {
            overflow-x: visible !important;
            white-space: normal !important;
          }
        }

        .scroll-nav::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Header;
