import styled from "styled-components";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVariants: Variants = {
  initial: (back: boolean) => ({
    opacity: 0,
    scale: 0,
    x: back ? -500 : 500,
  }),
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1 },
  },
  leaving: (back: boolean) => ({
    opacity: 0,
    scale: 0,
    x: back ? 500 : -500,
    transition: { duration: 1 },
  }),
};

const App = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const handleNextClick = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const handlePrevClick = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <button onClick={handlePrevClick}>{"<"}</button>

        <Box
          custom={back}
          variants={boxVariants}
          initial="initial"
          animate="visible"
          exit="leaving"
          key={visible}
        >
          {visible}
        </Box>

        <button onClick={handleNextClick}>{">"}</button>
      </AnimatePresence>
    </Wrapper>
  );
};

export default App;
