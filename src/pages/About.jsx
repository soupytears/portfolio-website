import Markdown from "react-markdown";

import Container from "react-bootstrap/Container";
import Apple from "../assets/images/drawings/apple.png";
import GreenStar from "../assets/images/drawings/green_star.png";
import MichelleIcon from "../assets/images/drawings/michelle_icon.png";
import { bio } from "../assets/data/bio";
import "../styles/About.css";

export default function Home() {
  return (
    <>
      <Container>
        <div className="about-title">
          <img src={Apple} />
          <h1>about me</h1>
          <img src={GreenStar} />
        </div>
      </Container>
      <Container className="about-info-container">
        <img src={MichelleIcon} />
        <Container className="about-text-container">
          <Markdown>{bio}</Markdown>
        </Container>
      </Container>
    </>
  );
}
