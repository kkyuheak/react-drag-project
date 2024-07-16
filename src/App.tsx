import styled from "styled-components";
import {
  Variants,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  height: 500vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BigBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const boxVars: Variants = {
  hover: { scale: 1.5, rotateZ: 90 },
  tap: { borderRadius: "50%", scale: 1 },
};

const App = () => {
  const x = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper>
      <Box drag="x" dragSnapToOrigin style={{ x, scale }}></Box>
    </Wrapper>
  );
};

export default App;
