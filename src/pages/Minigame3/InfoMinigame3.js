import { Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import { tsParticles } from "tsparticles";
import { mainConfig } from "../../assets/particlesjs-config";
import { Typography } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./InfoMinigame3.css";

const minigame3ContainerSx = {
  textAlign: "center",
  backgroundColor: "#2b2d42",
  zIndex: 10,
  height: "100%",
};

export default function InfoMinigame3() {
  const [stepIndex, setStepIndex] = useState(0);
  const [text] = useState([
    "Using the principles of Lean Startup in Data Science Projects, the goal is to reduce the uncertainty of a product or project as quickly as possible through validated learning by understanding what the customer really wants.",
    "First the hypothesis is set for the solution that is going to be built and the business metrics are defined, in the least costly way.",
    "The next step is to build the simplest model with the minimum number of features that allows to validate the hypothesis, in order to get to the point of testability as quick as possible. The initial model is the Minimum Viable Product (MVP).",
    "After the MVP is tested and evaluated based on the business metrics and customer feedback, a decision is made whether to pivot by changing hypothesis and business metrics, or whether to persevere by adding potential features and complexity, iteratively improving the model.",
    "The goal is to experiment with everything and iteratively learning and adapting all the time, obtaining a successful solution in the shortest possible time using the least amount of resources, thus remaining Lean!",
  ]);

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

  const settings = useMemo(() => {
    return {
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      beforeChange: (current, next) => setStepIndex(next),
    };
  }, []);

  return (
    <div style={minigame3ContainerSx}>
      <Header title="Lean Startup for Data Science projects" subtitle="Theoretical content" />
      <Box
        sx={{
          margin: "50px auto",
          height: "100 em",
          padding: "20px 50px 20px 50px",
          backgroundColor: "primary.main",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <div className="App">
          <Slider {...settings}>
            {text.map((txt, idx) => (
              <div
                className={idx === stepIndex ? "slide activeSlide" : "slide"}
              >
                <Typography variant="h3" component="h3">Step {idx + 1}</Typography>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <div className="txt_content">{txt}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Box>
      <Footer pathBack="/minigame-2" pathNext="/minigame-3" isSuccess={true} />
    </div>
  );
}
