import { motion } from 'motion/react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ContactForm from './ContactForm.jsx';
import {
  githubIcon,
  githubHoverIcon,
  linkedinIcon,
  linkedinHoverIcon,
  emailIcon,
  emailHoverIcon,
} from '../assets/images/icons/index.js';
import '../styles/ContactBar.css';
import { info } from "../assets/data/pageData.js"; 

export default function ContactBar() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <Container className="contact-bar">
        <Container className="nav-title">
          <p>find me on:</p>
        </Container>
        <Navbar className="py-2 navbar-container">
          <Container className="d-flex justify-content-center">
            <Nav className="d-flex flex-row gap-1 gap-sm-2 text-center">
              <NavItem
                href={info.socialLinks.github}
                defaultImg={githubIcon}
                hoverImg={githubHoverIcon}
                alt="github"
              />
              <NavItem
                href={info.socialLinks.linkedin}
                defaultImg={linkedinIcon}
                hoverImg={linkedinHoverIcon}
                alt="linkedin"
              />
              <NavItem
                onClick={handleOpenModal}
                defaultImg={emailIcon}
                hoverImg={emailHoverIcon}
                alt="email"
              />
            </Nav>
          </Container>
        </Navbar>
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>send me a message!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactForm />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

const MotionNavLink = motion.create(Nav.Link);

function NavItem({ href, onClick, defaultImg, hoverImg, alt }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionNavLink
      href={href || '#'}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? hoverImg : defaultImg}
        alt={alt}
        className='nav-icon'
      />
    </MotionNavLink>
  );
}