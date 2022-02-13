import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { tsParticles } from "tsparticles";

// custom components
import "./InfoMinigame1.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageGenerateLoop from "../../components/ImageGenerateLoop";
import { alternativeConfig } from "../../assets/particlesjs-config";
import imgLeanStartup from "./Images/lean-startup.png";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  StickyOut,
  StickyIn,
  FadeIn,
  ZoomOut,
} from "react-scroll-motion";

const minigame1ContainerSx = {
  textAlign: "center",
  backgroundColor: "#2b2d42",
  zIndex: 10,
};

// content
let leanStartupInfo =
  "A methodology for developing businesses and products that aims to shorten product development cycles and rapidly discover if a proposed business model is viable.";
let howLeanStartup =
  "This is achieved by adopting a combination of business-hypothesis-driven experimentation, iterative product releases, and validated learning.";
let questions =
  'The question is not "Can this product be built?". Instead, the questions are "Should this product be built?" and "Can we build a sustainable business around this set of products and services?"';
let coreComponent =
  "A core component of Lean Startup methodology is the build-measure-learn feedback loop. The first step is figuring out the problem that needs to be solved and then developing a minimum viable product (MVP) to begin the process of learning as quickly as possible.";
let steps =
  "Build-Measure-Learn : The fundamental activity of a startup is to turn ideas into products, measure how customers respond, and then learn whether to pivot or persevere. All successful startup processes should be geared to accelerate that feedback loop.";

const ContentTitle = (props) => {
  return <Header variant="h1" component="h1" subtitle={props.title} />;
};

const ContentText = (props) => {
  return (
    <Typography
      variant="h5"
      component="h5"
      color="white"
      sx={{ lineHeight: 2 }}
    >
      {props.content}
    </Typography>
  );
};
// /content

// react-scroll-motion animations
let titleAnimation = batch(StickyOut(), Fade(), ZoomOut());
let contentDefaultAnimation = batch(StickyIn(), FadeIn(), MoveOut(0, -100));
// /react-scroll-motion animations

export default function InfoMinigame1() {
  // configure particles js
  useEffect(() => {
    tsParticles.load("tsparticles", alternativeConfig);
    const particles = tsParticles.domItem(0);
    particles.play();

    // disable particles when we go to other pages / unmount
    return () => {
      particles.stop();
    };
  }, []);

  return (
    <ScrollContainer>
      <div style={minigame1ContainerSx}>
        <ScrollPage page={0}>
          <Animator animation={titleAnimation}>
            <Header
              variant="h1"
              component="h1"
              title="Lean Startup"
              subtitle="Theoretical content"
            />
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator animation={contentDefaultAnimation}>
            <ContentTitle title="What is it?"></ContentTitle>
            <ContentText content={leanStartupInfo}></ContentText>
            <ImageGenerateLoop path={imgLeanStartup} />
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={contentDefaultAnimation}>
            <ContentTitle title="How?"></ContentTitle>
            <ContentText content={howLeanStartup}></ContentText>
          </Animator>
        </ScrollPage>

        <ScrollPage page={3}>
          <Animator animation={contentDefaultAnimation}>
            <ContentTitle title="Pertinent questions"></ContentTitle>
            <ContentText content={questions}></ContentText>
          </Animator>
        </ScrollPage>

        <ScrollPage page={4}>
          <Animator animation={contentDefaultAnimation}>
            <ContentTitle title="The core"></ContentTitle>
            <ContentText content={coreComponent}></ContentText>
          </Animator>
        </ScrollPage>

        <ScrollPage page={5}>
          <Animator animation={contentDefaultAnimation}>
            <ContentTitle title="Steps"></ContentTitle>
            <ContentText content={steps}></ContentText>
          </Animator>
        </ScrollPage>

        <Footer pathBack="/" pathNext="/minigame-1" isSuccess={true} />
      </div>
    </ScrollContainer>
  );
}
