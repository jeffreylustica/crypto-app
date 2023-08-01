import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mouseEnter, mouseLeave } from "../features/isHoverSlice";

const useHover = () => {
  const isHover = useSelector(state => state.isHover.isHover)
  const dispatch = useDispatch()
  const ref = useRef(null);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", () => {
      dispatch(mouseEnter());
    });
    ref.current.addEventListener("mouseleave", () => {
      dispatch(mouseLeave());
    });
  }, [dispatch]);

  return [isHover, ref];
};

export default useHover;
