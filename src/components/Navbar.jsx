import { motion } from 'motion/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

const MotionNavLink = motion.create(Nav.Link);

function NavItem({ to, href, children }) {
  // external link
  if (href) {
    return (
      <MotionNavLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </MotionNavLink>
    );
  }
  // internal route
  return (
    <MotionNavLink
      as={Link}
      to={to}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </MotionNavLink>
  );
}

export default function TopBar() {
  return (
    <>
      <Navbar className="py-2">
        <Container className="d-flex justify-content-center">
          <Nav className="d-flex flex-row gap-3 gap-sm-4 text-center">
            <NavItem to="/">home</NavItem>
            <NavItem to="/about">about</NavItem>
            <NavItem to="/projects">projects</NavItem>
            <NavItem href="https://github.com/soupytears/portfolio-website">
              source
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
