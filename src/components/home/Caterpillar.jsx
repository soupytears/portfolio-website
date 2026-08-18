import { motion } from 'framer-motion'
import caterpillarImg from '../../assets/images/caterpillar.png';

export default function Caterpillar({ className }) {
  return (
    <motion.img
      src={caterpillarImg}
      className={className}
      style={imgStyle}
      initial={{ scaleX: 1, scaleY: 1 }}
      animate={{ scaleX: 1.15, scaleY: 0.85 }}
      transition={bounceTransition}
      draggable="false"
    />
  );
}

const imgStyle = {
  display: 'block',
  maxWidth: '100%',
  width: '50vw'
}

const bounceTransition = {
  type: 'spring',
  repeat: Infinity,
  stiffness: 80,
  damping: 5,
  repeatType: 'mirror'
}