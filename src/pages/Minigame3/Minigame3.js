import React, { useState, useEffect } from "react";
import { tsParticles } from "tsparticles";

// custom components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { mainConfig } from "../../assets/particlesjs-config";
import { Container, Typography } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import GameResultDialog from "./GameResultDialog";

// game result states
const GAME_RESULT = {
  WON: "won",
  LOST: "lost",
};

// styles
const minigameContainerSx = {
  width: "100%",
  height: "100%",
  backgroundColor: "#2b2d42",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const progressContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "70vw",
  backgroundColor: "#fff",
  borderRadius: "20px",
  opacity: "0.7",
  marginBottom: "40px",
};

const barContainerStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  minWidth: "100%",
  height: "100%",
  backgroundColor: "#2b2d42",
  gap: "5px",
};

const commonSingleBarStyle = {
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  transition: "width 1s",
};

const questionsContainerStyle = {
  width: "70vw",
  height: "200px",
  backgroundColor: "#fff",
  borderRadius: "20px",
  padding: "1em",
};

const trueFalseStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "10px",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
  marginBottom: "20px",
};
// /styles

const questions = [
  {
    question:
      "The project should start even without business metrics or a hypothesis well defined",
    answer: false,
  },
  {
    question: "In the Lean Startup for Data Science projects, the goal is to reduce the uncertainty of a product or project that will be built",
    answer: true,
  },
  {
    question: "In the Lean Startup for Data Science projects it is not important how much money and resources are spent in the initial phase",
    answer: false,
  },
  {
    question:
      "It is important for the first model shown to have as many features as possible",
    answer: false,
  },
  {
    question:
      "After the initial launch of the MVP, it is important to decide whether to pivot or whether to keep improving the product",
    answer: true,
  },
  {
    question: "MVP in Data Science Projects can be a simple model",
    answer: true,
  },
  {
    question: "In the Lean Startup methodology for Data Sciece projects, we can never pivot or terminate the project after the MVP is released",
    answer: false,
  },
  {
    question:
      "The main goal is to learn and adapt as quick as possible, spending the least amount of resources",
    answer: true,
  },
  {
    question: "Lean Startup can never be applied in Data Science Projects",
    answer: false,
  },
  {
    question: "In the Lean Startup for Data Science projects the initial model is the Most Viable Product",
    answer: false,
  },
];

export default function Minigame3(props) {
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

  const [greenPercentage, setGreenPercentage] = useState(60);
  const [redPercentage, setRedPercentage] = useState(40);
  const PERCENTAGE_STEP = 20;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [gameResult, setGameResult] = useState("");
  const [openGameResultDialog, setOpenGameResultDialog] = useState(false);

  const restartGameState = () => {
    setGameResult("");
    setCurrentQuestionIndex(0);
    setGreenPercentage(60);
    setRedPercentage(40);
  };

  const closeGameResultDialog = () => {
    setOpenGameResultDialog(false);
    if (gameResult === GAME_RESULT.LOST) {
      restartGameState();
    }
  };

  useEffect(() => {
    if (greenPercentage === 100) {
      setGameResult(GAME_RESULT.WON);
      setOpenGameResultDialog(true);
    } else if (redPercentage === 100) {
      setGameResult(GAME_RESULT.LOST);
      setOpenGameResultDialog(true);
    }
  }, [greenPercentage, redPercentage]);

  useEffect(() => {
    // check if there are no more questions
    if (currentQuestionIndex === questions.length - 1) {
      setGameResult(GAME_RESULT.LOST);
      setOpenGameResultDialog(true);
    }
  }, [currentQuestionIndex]);

  const increaseGreen = () => {
    if (greenPercentage + PERCENTAGE_STEP <= 100)
      setGreenPercentage(greenPercentage + PERCENTAGE_STEP);
    if (redPercentage - PERCENTAGE_STEP >= 0)
      setRedPercentage(redPercentage - PERCENTAGE_STEP);
  };

  const increaseRed = () => {
    if (redPercentage + PERCENTAGE_STEP <= 100)
      setRedPercentage(redPercentage + PERCENTAGE_STEP);
    if (greenPercentage - PERCENTAGE_STEP >= 0)
      setGreenPercentage(greenPercentage - PERCENTAGE_STEP);
  };

  const handleAnswer = (answer) => {
    if (questions[currentQuestionIndex].answer === answer) {
      increaseGreen();
    } else {
      increaseRed();
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div style={minigameContainerSx}>
      <Header title="Mini-game #3" subtitle="Arcade True or False" />

      <Container>
        <CustomButton
          text="Restart"
          variant="outlined"
          onClick={restartGameState}
        />
      </Container>

      <Container sx={{ marginTop: "40px" }}>
        <Typography variant="h6" component="h6" color="white">
          Progress:
        </Typography>
      </Container>

      <div style={progressContainerStyle}>
        <div style={barContainerStyle}>
          <div
            style={{
              ...commonSingleBarStyle,
              width: greenPercentage + "%",
              backgroundColor: "green",
            }}
          >
            <Typography color="white">{greenPercentage}%</Typography>
          </div>
          <div
            style={{
              ...commonSingleBarStyle,
              width: redPercentage + "%",
              backgroundColor: "red",
            }}
          >
            <Typography color="white">{redPercentage}%</Typography>
          </div>
        </div>
      </div>

      <div style={questionsContainerStyle}>
        <Typography variant="h3" component="h3">
          Question {currentQuestionIndex + 1}
        </Typography>

        <Typography variant="h5" component="h5" sx={{ marginTop: "15px" }}>
          {questions[currentQuestionIndex].question}
        </Typography>

        <div style={trueFalseStyle}>
          <CustomButton
            text="True"
            onClick={() => handleAnswer(true)}
            disabled={gameResult === GAME_RESULT.WON}
          ></CustomButton>
          <CustomButton
            text="False"
            onClick={() => handleAnswer(false)}
            disabled={gameResult === GAME_RESULT.WON}
          ></CustomButton>
        </div>
      </div>

      <GameResultDialog
        openDialog={openGameResultDialog}
        close={closeGameResultDialog}
        gameResult={gameResult}
      ></GameResultDialog>

      <Footer
        pathBack="/info-minigame-3"
        pathNext="/finalgame"
        sx={{ marginTop: "40px" }}
        isSuccess={gameResult === GAME_RESULT.WON}
      />
    </div>
  );
}

export { GAME_RESULT };
