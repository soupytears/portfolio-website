import Container from 'react-bootstrap/Container';
import ContactBar from './ContactBar.jsx';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <>
      <Container className="footer">
        <Container className="divider">
          <p>✩‧₊˚─────⋆⋅☆⋅⋆─────˚₊‧✩</p>
        </Container>
        <ContactBar />
        <p>
          built with react. header font is testtypelefthand by{" "}
          <a href="https://www.notyourtype.nl/">notyourtypefoundry.</a> all
          other assets are hand-drawn by me. all rights reserved.
        </p>
      </Container>
    </>
  );
}