import Crossword from "@jaredreisinger/react-crossword";
import { Box, Container } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { tsParticles } from "tsparticles";
import { mainConfig } from "../../assets/particlesjs-config";

const data = {
  across: {
    1: { clue: "Stage that creates a machine-learning model suitable for production.", answer: "MODELING", row: 0, col: 0 },
    2: { clue: "what we need to do for models to become available for final user acceptance.", answer: "DEPLOYMENT", row: 3, col: 0 },
    3: { clue: "Form of analysis presented in the Data Exploration phase.", answer: "OUTLIERS", row: 8, col: 3 },
  },
  down: {
    1: { clue: "Process that ensures a model is good to go for prodution.", answer: "EVALUATION", row: 0, col: 3 },
    2: { clue: "Number of steps in a general data science life cycle.", answer: "SEVEN", row: 2, col: 1 },
  },
};

const CrossWordWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  .crossword {
    
    rect {
      stroke: rgb(43, 45, 66) !important;
    }
    svg > rect {
      fill: rgb(43, 45, 66) !important;
    }
  }

  .crossword.correct {
    text {
      fill: rgb(100, 200, 100) !important;
    }
    pointer-events: none;
  }



  .clue.correct {
    ::before {
      content: "\u2713"; /* a.k.a. checkmark: ✓ */
      display: inline-block;
      text-decoration: none;
      margin-right: 0.25em;
    }
    color: rgb(100, 200, 100);

    text-decoration: line-through;
    color: rgb(130, 130, 130);
  }

  .clue {
    background-color: rgb(255,255,255);
    color: rgb(0,0,0);
  }

  .guFLmb {
    background-color: rgb(255,255,204);
  }
`;

const minigame2ContainerSx = {
  textAlign: "center",
  backgroundColor: "#2b2d42",
  height: "100%",
  maxWidth: "100% !important"
};

export default function Minigame2() {
  const ref = useRef();
  const [selectSuccess, setSelectSuccess] = useState(false);

  // configure particles js
  useEffect(() => {
    tsParticles.load("tsparticles", mainConfig);
    const particles = tsParticles.domItem(0);
    particles.play();

    // disable particles when we go to other pages / unmount
    return () => {
      particles.stop();
    };
  }, []);

  const onCrossWord = useCallback(() => {

    if (ref.current.isCrosswordCorrect())
      setSelectSuccess(true);
    else
      console.log("Incorrect");

  }, [ref.current?.isCrosswordCorrect()]);

  return (
    <div style={minigame2ContainerSx}>
      <Header title="Mini-game #2" subtitle="Crosswords"/>
      <Container style={{marginBottom: "1em"}}>
        <Box
          sx={{
            margin: "0px auto",
            maxWidth: "800px",
            padding: "20px 50px 20px 50px",
            backgroundColor: "primary.main",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <CrossWordWrapper>
            <Crossword ref={ref} data={data} onCrosswordCorrect={onCrossWord} useStorage={false} />
          </CrossWordWrapper>
        </Box>
      </Container>
      <Footer pathBack="/info-minigame-2" pathNext="/info-minigame-3" isSuccess={selectSuccess} />
    </div>
  );
}
