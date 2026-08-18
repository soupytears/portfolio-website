import Container from 'react-bootstrap/Container'
import Apple from '../assets/images/apple.png';
import GreenStar from '../assets/images/green_star.png';
import MichelleIcon from '../assets/images/michelle_icon.png'
import '../styles/About.css'

export default function Home() {
  return (
    <>
      <Container>
        <div className='about-title'>
          <img src={Apple} />
          <h1>about me</h1>
          <img src={GreenStar} />
        </div>
      </Container>
      <Container className='about-text-container'>
        <img src={MichelleIcon} />
        <p>
          hi! i'm michelle. i was born in seoul, but moved to seattle when i was
          4. i'm currently an undergraduate student at the UW studying computer
          science, where i'm going into my third year. in true seattleite
          fashion, i love coffee! my favorite is a NOLA blend; i love the deep
          flavor. some of my hobbies include drawing, knitting, creating videos,
          and 3d modeling.
        </p>
      </Container>
    </>
  );
}