import React from "react";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import CustomButton from "../../components/CustomButton";
import { GAME_RESULT } from "./Minigame3";

export default function GameResultDialog(props) {
  const { openDialog, close, gameResult } = props;

  return (
    <Dialog open={openDialog} fullWidth>
      <DialogContent
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {gameResult === GAME_RESULT.WON && (
          <Typography>Congratulations... You won!</Typography>
        )}
        {gameResult === GAME_RESULT.LOST && (
          <Typography>You lost :( Please try again</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <CustomButton text="OK" color="info" onClick={() => close()}></CustomButton>
      </DialogActions>
    </Dialog>
  );
}
