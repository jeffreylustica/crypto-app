import { useEffect, useRef, useState } from "react";

const useHover = () => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef(null);

  const mouseEnter = () => {
    setIsHover(true);
  };

  const mouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    ref.current.addEventListener("mouseenter", mouseEnter);
    ref.current.addEventListener("mouseleave", mouseLeave);
  }, [isHover]);

  return [isHover, ref];
};

export default useHover;
