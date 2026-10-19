import Container from 'react-bootstrap/Container'
import HeroGraphic from '../components/home/Hero'
import '../styles/Home.css'

export default function Home() {
  return (
    <>
      <Container>
        <HeroGraphic />
      </Container>
      <Container>
        <p className="self-intro">programmer • artist • student</p>
        <p className="self-intro-paragraph">Click around to learn more about me!</p>
      </Container>
    </>
  );
}