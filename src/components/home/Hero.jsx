import Caterpillar from './Caterpillar';
import HeroText from "./HeroText";
import '../../styles/Hero.css';

export default function HeroGraphic() {
  return (
    <div className="hero-container">
      <HeroText className="hero-text" />
      <Caterpillar className="hero-image" />
    </div>
  );
}
