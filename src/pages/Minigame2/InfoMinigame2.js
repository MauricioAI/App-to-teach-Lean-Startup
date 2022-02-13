import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BoxGenerate from "../../components/BoxGenerate";
import FullBoxGenerate from "../../components/FullBoxGenerate";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ImageGenerate from "../../components/ImageGenerate";
import { tsParticles } from "tsparticles";
import { mainConfig } from "../../assets/particlesjs-config";
import imageDS from "./Images/DSLifecycle.png";
import imageBU from "./Images/business-understanding.png";
import imageDM from "./Images/data-mining.jpg";
import imageDC from "./Images/data_cleaning_cycle.jpg";
import imageDE from "./Images/data-exploration.jpg";
import imageFE from "./Images/Feature-Engineering.jpg";
import imageMO from "./Images/modeling.jpg";
import imageDV from "./Images/data-visualization.jpg";

//START - DEFINE CONTENT TO SHOW
const introTDSP = "<p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">"+
  "A data science life cycle is an iterative set of data science steps that are taken to deliver a project or analysis.</span></p><br><p style=\"text-align: justify;\"><span style=\"font-size: 21px;\"> Most data science projects tend to flow through the same general life cycle of data science steps.</span></p>"

const dataScienceExplain = "<p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">"+
"Data science combines multiple fields, including statistics, scientific methods, artificial intelligence (AI), and data analysis to extract value from data.</span></p><br><p style=\"text-align: justify;\"><span style=\"font-size: 21px;\"> Data Scientists combine a range of skills to analyze data collected from various sources, such as: web, smartphones, customers, sensors, etc.</span></p>";

const business = "<h1><span style=\"font-size: 29px;\">Business Understanding</span></h1><br>"+
"<p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">Before we start collecting data and building a machine learning model is important to define and understand the problem we're trying to solve.</span></p><br><p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">In this step, it should also be identified the main goal of the project by defining the variables that need to be predicted.</span></p>";

const collectionData = "<h1><span style=\"font-size: 29px;\">Data Collection</span></h1><br>"+
"<p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">It’s very challenging or nearly impossible to build a good model without quality data or a good mechanism to collect the data.</span></p><br><p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">Data might need to be collected from multiple types of data sources, such as:</span></p><br><ul><li><span style=\"font-size: 21px;\">File format Data (For example: Spreadsheet, CSV, Text files, XML, JSON)</span></li><li><span style=\"font-size: 21px;\">Relational Database</span></li><li><span style=\"font-size: 21px;\">Non-relational Database (For example: NoSQL)</span></li><li><span style=\"font-size: 21px;\">Scraping Website Data using tools</span></li></ul>" 

const dataCleaning = "<h1><span style=\"font-size: 29px;\">Data Cleaning</span></h1><br>"+
"</span></p><br><p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">When building a ML model without data processing and cleaning, the results of the analysis will not make sense. This is because bad data produces terrible models, no matter how much you tweak the parameters or optimize the hyperparameters of the model."+
"</span></p><br><p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">Some data professionals even claim that 80% of the time dedicated to a data project is spent on data collection, cleaning, and processing.</span></p>";

const explorationData = "<h1><span style=\"font-size: 29px;\">Data Exploration</span></h1><br>"+
"<p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">"+ 
"It’s time to deeply inspect all the data features, data properties, build confidence in the data, gain intuition about the data, conduct a stability check and figure out how to handle each feature."+
"</span></p><br><p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">This phase involves several forms of analysis, including univariate analysis, bivariate analysis, missing values treatment, outlier handling, variable transformation, feature engineering and correlation analysis.</span></p>";

const featureEngineering = "<h1><span style=\"font-size: 29px;\">Feature Engineering</span></h1><br>"+
"<p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">Feature engineering is the method of transforming raw data into features that better represent the fundamental problem to the predictive models, resulting in better model accuracy on unseen data."+
"</span></p><br><p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">This step is so important because the features in data will directly influence the predictive models it use and the results can achieve.</span></p>";

const predictiveModelling = "<h1><span style=\"font-size: 29px;\">Predictive Modelling</span></h1><br>"+
"<p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">Predictive modelling is a statistical technique that uses machine learning and data mining to predict likely future outcomes with the aid of historical and existing data.</span></p><br><p style=\"text-align: justify;\"><span style=\"font-size: 21px;\"> Predictive models make predictions based on the variation of the data over the time considered.</span></p>";

const dataVisualization = "<h1><span style=\"font-size: 29px;\">Data Visualization</span></h1><br>"+
"<p style=\"text-align: justify;\"><span style=\"font-size: 21px;\">The goal of this phase is to interpret large data sets and metrics hooked on charts, graphs and other visuals. </span></p><br><p style=\"text-align: justify;\"><span style=\"font-size: 21px;\"> The follow-on visual illustration of data makes it easier to identify and share real-time tendencies, outliers and new insights about the information characterized in the data.</span></p>";

//END

const infoMinigame2ContainerSx = {
  textAlign: "center",
  backgroundColor: "#2b2d42",
  maxWidth: "100% !important",
  maxHeight: "100% !important"
};

const BoxStyled = styled(motion.div)`
  .box {
    width: 100%;
    padding: 20px 50px 20px 50px;
    background-color: rgb(228, 87, 46);
    color: white;
    font-size: 21px;
    border-radius: 10px;
    margin: 0px 30px 40px 30px;
  }
`;

const FullBoxStyled = styled(motion.div)`
  .box {
    width: 100%;
    padding: 20px 0px 20px 0px;
    background-color: rgb(228, 87, 46);
    color: white;
    font-size: 21px;
  }
`;

const FullBoxTransparentStyled = styled(motion.div)`
  .box {
    width: 100%;
    padding: 20px 0px 20px 0px;
    color: white;
    font-size: 21px;
  }
`;


export default function InfoMinigame2() {


  //configure particles js
  useEffect(() => {
    tsParticles.load("tsparticles", mainConfig);
    const particles = tsParticles.domItem(0);
    particles.play();

    // disable particles when we go to other pages / unmount
    return () => {
      particles.stop();
    };
  }, []);


  //[-1500, -750, -500, -350,-200, -100, 0]
  return (
    <div style={infoMinigame2ContainerSx}>
      <Header title="Data Science" subtitle="Theoretical content" />
      <Grid container style={{ marginTop: 100, marginBottom: 100 }}>
        <Grid item xs={8}>
          <BoxStyled>
            <BoxGenerate
              content={dataScienceExplain}
              coordinates={[-900, -750, -600, -450, -300, -150, 0]}
              widthBox={"65%"}
              floatDirection={"left"}
            />
            <BoxGenerate
              content={introTDSP}
              coordinates={[+900, +750, +600, +450, +300, +150, 0]}
              floatDirection={"left"}
              widthBox={"65%"}
            />
          </BoxStyled>
        </Grid>
        <Grid item xs={4}>
          <ImageGenerate path={imageDS} />
        </Grid>
      </Grid>
      <Grid container style={{marginBottom: "1em"}}>
        <FullBoxStyled>
          <FullBoxGenerate
            path={imageBU}
            height={270}
            width={390}
            isTransparent={false}
            content={business}
            coordinates={[+900, +750, +600, +450, +300, +150, 0]}
            floatDirection={"left"}
            widthBox={"100%"}
          />
        </FullBoxStyled>
        <FullBoxTransparentStyled>
          <FullBoxGenerate
            path={imageDM}
            height={270}
            width={390}
            isTransparent={true}
            content={collectionData}
            coordinates={[+900, +750, +600, +450, +300, +150, 0]}
            floatDirection={"left"}
            widthBox={"100%"}
          />
        </FullBoxTransparentStyled>
        <FullBoxStyled>
          <FullBoxGenerate
            path={imageDC}
            height={270}
            width={370}
            isTransparent={false}
            content={dataCleaning}
            coordinates={[+900, +750, +600, +450, +300, +150, 0]}
            floatDirection={"left"}
            widthBox={"100%"}
          />
        </FullBoxStyled>
        <FullBoxTransparentStyled>
          <FullBoxGenerate
            path={imageDE}
            height={270}
            width={390}
            isTransparent={true}
            content={explorationData}
            coordinates={[+900, +750, +600, +450, +300, +150, 0]}
            floatDirection={"left"}
            widthBox={"100%"}
          />
        </FullBoxTransparentStyled>
        <FullBoxStyled>
          <FullBoxGenerate
            path={imageFE}
            height={270}
            width={425}
            isTransparent={false}
            content={featureEngineering}
            coordinates={[+900, +750, +600, +450, +300, +150, 0]}
            floatDirection={"left"}
            widthBox={"100%"}
          />
        </FullBoxStyled>
        <FullBoxTransparentStyled>
          <FullBoxGenerate
            path={imageMO}
            height={270}
            width={410}
            isTransparent={true}
            content={predictiveModelling}
            coordinates={[+900, +750, +600, +450, +300, +150, 0]}
            floatDirection={"left"}
            widthBox={"100%"}
          />
        </FullBoxTransparentStyled>
        <FullBoxStyled>
          <FullBoxGenerate
            path={imageDV}
            height={270}
            width={410}
            isTransparent={false}
            content={dataVisualization}
            coordinates={[+900, +750, +600, +450, +300, +150, 0]}
            floatDirection={"left"}
            widthBox={"100%"}
          />
        </FullBoxStyled>
      </Grid>

      <Footer pathBack="/minigame-1" pathNext="/minigame-2" isSuccess={true} />
    </div>
  );
}
