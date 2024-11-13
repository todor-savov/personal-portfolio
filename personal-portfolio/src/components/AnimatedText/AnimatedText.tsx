import { useSprings, animated } from 'react-spring';

const AnimatedText = ({ text } : { text: string }) => {
  
  const springs = useSprings(
    text.length,
    text.split('').map((_, i) => ({
        opacity: 1,
        from: { opacity: 0 },
        delay: i * 100,
    }))
  );

return (
    <h1>
        {springs.map((spring, index) => (
            <animated.span key={index} style={spring}>
                {text}
            </animated.span>
        ))}
    </h1>
);};

export default AnimatedText;