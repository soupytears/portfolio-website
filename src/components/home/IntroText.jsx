import React from 'react';
import { useInView, motion } from 'framer-motion';

export default function IntroText({ className }) {
  return (
    <div className={`w-full w-full text-center md:text-left ${className || ""}`}>
      <TypingEffect text={"hi , i'm\nmichelle !"} style={titleText} />
    </div>
  );
}

const titleText = {
  fontFamily: 'testtypelefthand',
  fontSize: '80px',
  letterSpacing: '0.05em',
  color: 'var(--accent-dark)'
};

function TypingEffect({ text, style }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const animVariants = {
    hidden: {
      opacity: 0,
      y: '0.25em',
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: i * 0.1,
      },
    }),
    loop: (i) => ({
      y: [0, -5, 0],
      transition: {
        y: {
          duration: 1.25,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
          delay: i * 0.15,
        },
      },
    }),
  };

  return (
    <h2
      ref={ref}
      style={style}
      className='text-xl text-center sm:text-4xl md:text-6xl'
    >
      {text.split('').map((letter, index) => {
        // add a space
        if (letter === '\n') {
          return <br key={index} />;
        }
        return (
          <motion.span
            key={index}
            custom={index}
            variants={animVariants}
            initial='hidden'
            animate={isInView ? ['visible', 'loop'] : 'hidden'}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {letter}
          </motion.span>
        );
      })}
    </h2>
  );
}
