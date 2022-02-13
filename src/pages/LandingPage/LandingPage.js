import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { tsParticles } from "tsparticles";

// css
import "./LandingPage.css";
// custom components
import CustomButton from "../../components/CustomButton";
import { mainConfig } from "../../assets/particlesjs-config";

export default function LandingPage() {
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

  return (
    <div className="landing-container">
      <Typography variant="h1" component="h1" color="white" gutterBottom>
        Lean Startup
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        for Data Science projects
      </Typography>

      <Link to="/info-minigame-1">
        <CustomButton
          text="Get started 🎮"
          sx={{
            width: "300px",
            height: "100px",
            fontSize: "25px",
            marginTop: "50px",
            borderRadius: "20px",
          }}
        />
      </Link>
    </div>
  );
}
