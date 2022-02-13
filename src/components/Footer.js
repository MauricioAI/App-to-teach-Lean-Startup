import React from "react";
import CustomButton from "./CustomButton";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <Container style={{ paddingBottom: "33px" }} sx={props.sx}>
      {props.pathBack && (
        <Link to={props.pathBack}>
          <CustomButton text="Back 🔙" sx={{ marginRight: "1em" }} />
        </Link>
      )}

      {props.extraButtons !== undefined && props.extraButtons.map(btn => btn)}

      {props.pathNext && (
        <Link to={props.pathNext}>
          <CustomButton
            text="Next ⏭"
            disabled={
              props.isSuccess !== undefined && (props.isSuccess ? false : true)
            }
          />
        </Link>
      )}
    </Container>
  );
}
