import { useSpring, animated } from 'react-spring';

const AnimatedText = ({ text } : { text: string }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });
  
  return <animated.div style={props}>{text}</animated.div>;
};

export default AnimatedText;