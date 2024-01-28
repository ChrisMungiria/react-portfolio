import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { description } from "../lib/constants";

const TextCarousel = () => {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(description[index], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 500, // duration for the transition
    },
  });

  // Change text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % description.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "1.2em" }}>
      {transitions((style, item) => (
        <animated.div
          style={{ ...style, position: "absolute" }}
          className="text-Highlight font-bold p-4"
        >
          {item}
        </animated.div>
      ))}
    </div>
  );
};

export default TextCarousel;
