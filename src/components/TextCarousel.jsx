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
      duration: 200, // duration for the transition
    },
  });

  // Change text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % description.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-5 my-5">
      {transitions((style, item) => (
        <animated.div
          style={{ ...style, position: "absolute" }}
          className="text-Highlight font-bold text-center sm:text-start"
        >
          {item}
        </animated.div>
      ))}
    </div>
  );
};

export default TextCarousel;
