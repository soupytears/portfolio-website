import Caterpillar from './Caterpillar';
import IntroText from './IntroText';
import '../../styles/Hero.css';

export default function HeroGraphic() {
  return (
    <div className='hero-container'>
      <IntroText className='hero-text' />
      <Caterpillar className='hero-image' />
    </div>
  );
}
