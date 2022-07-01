import { useRef } from "react";
const UseRenderCounter = label => {
  const counter = useRef(0);
  counter.current++;
  console.log(`${label} rendered ${counter.current} times`);
};
export default UseRenderCounter;