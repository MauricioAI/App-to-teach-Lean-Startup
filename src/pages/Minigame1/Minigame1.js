import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";
import { tsParticles } from "tsparticles";

// custom components
import CustomButton from "../../components/CustomButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { mainConfig } from "../../assets/particlesjs-config";

const minigame1ContainerSx = {
  width: "100%",
  height: "100%",
  textAlign: "center",
  backgroundColor: "#2b2d42",
};

const gridElementSx = {
  marginTop: "1em",
  marginBottom: "1em",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
};

export default function Minigame1() {

  // configure particles js
  useEffect( () => {
    tsParticles.load("tsparticles", mainConfig);
    const particles = tsParticles.domItem(0);
    particles.play();

    // disable particles when we go to other pages / unmount
    return () => {
      particles.stop();
    }
  },[]);

  const [select1Value, setSelect1Value] = useState(1);
  const [select2Value, setSelect2Value] = useState(1);
  const [select3Value, setSelect3Value] = useState(1);

  const [selectSuccess, setSelectSuccess] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleVerify = () => {
    let select1Answer = 2;
    let select2Answer = 1;
    let select3Answer = 1;
    setSelectSuccess(false);
    if (
      select1Value === select1Answer &&
      select2Value === select2Answer &&
      select3Value === select3Answer
    ) {
      setSelectSuccess(true);
    }
    setSnackbarOpen(true);
  };

  const handleClear = () => {
    setSelect1Value(1);
    setSelect2Value(1);
    setSelect3Value(1);
  };

  return (
    <div style={minigame1ContainerSx}>
     
      <Header title="Mini-game #1" subtitle="Complete the sentences" />

      <Container sx={{ marginBottom: "2em" }}>
        <CustomButton
          text="Clear"
          variant="outlined"
          onClick={handleClear}
          sx={{ marginRight: "1em" }}
        />
        <CustomButton text="Verify" variant="outlined" onClick={handleVerify} />
      </Container>

      <Container>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={1}
          container
          spacing={{ xs: 1, md: 2 }}
          sx={{ 
            backgroundColor: "primary.main",
            color: "white",
            marginBottom: "2em",
            borderRadius: "10px",
          }}
        >
          <Box gridColumn="span 12" sx={gridElementSx}>
            <Typography>
              The feedback loop, in the Lean Startup Methodology, is: 
            </Typography>
            <Select
              label="select1"
              sx={{ color: "white", backgroundColor: "info.main" }}
              value={select1Value}
              onChange={(e) => setSelect1Value(e.target.value)}
            >
              <MenuItem value={1}>Ideas-Code-Learn</MenuItem>
              <MenuItem value={2}>Build-Measure-Learn</MenuItem>
              <MenuItem value={3}>Build-Code-Measure</MenuItem>
            </Select>
          </Box>

          <Box gridColumn="span 12" sx={gridElementSx}>
            <Typography>The main goal is to </Typography>
            <Select
              label="select2"
              sx={{ color: "white", backgroundColor: "info.main" }}
              value={select2Value}
              onChange={(e) => setSelect2Value(e.target.value)}
            >
              <MenuItem value={1}>shorten</MenuItem>
              <MenuItem value={2}>delay</MenuItem>
              <MenuItem value={3}>raise</MenuItem>
            </Select>
            <Typography>the development time and check if an idea is viable.</Typography>
          </Box>

          <Box gridColumn="span 12" sx={gridElementSx}>
            <Typography>The </Typography>
            <Select
              label="select3"
              sx={{ color: "white", backgroundColor: "info.main" }}
              value={select3Value}
              onChange={(e) => setSelect3Value(e.target.value)}
            >
              <MenuItem value={1}>MVP</MenuItem>
              <MenuItem value={2}>Prototype</MenuItem>
              <MenuItem value={3}>Demo</MenuItem>
            </Select>
            <Typography>is used to begin the process of learning as quickly as possible</Typography>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={selectSuccess ? "success" : "error" || "success"}
          sx={{ width: "100%" }}
        >
          {selectSuccess ? "Success!" : "Wrong answer"}
        </Alert>
      </Snackbar>

      <Footer pathBack="/info-minigame-1" pathNext="/info-minigame-2" isSuccess={selectSuccess} />
    </div>
  );
}
