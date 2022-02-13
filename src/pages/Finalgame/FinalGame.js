import { Button, createStyles, Grid, Snackbar, Alert } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { tsParticles } from "tsparticles";
import { mainConfig } from "../../assets/particlesjs-config";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { makeStyles } from "@mui/styles";
import DialogQuestion from "./DialogQuestion";
import ClearIcon from '@mui/icons-material/Clear';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const useStyles = makeStyles((theme) =>
  createStyles({
    containerDiv: {
      textAlign: "center",
      backgroundColor: "#2b2d42",
      height: "100%"
    },
    rowGrid: {
      display: "flex",
      justifyContent: "center",
    },

    colGrid: {
      color: "#E4572E",
      height: "180px",
      width: "180px",
      border: "3px solid #2b2d42",
      backgroundColor: "#F2F4F3",
      lineHeight: "170px",
      fontSize: "28px",
      marginRight: -20,
      marginBottom: -14.5
    },

    colGridRed: {
      color: "#FFFFFF",
      height: "180px",
      width: "180px",
      border: "3px solid #2b2d42",
      backgroundColor: "rgb(196, 59, 59)",
      lineHeight: "170px",
      fontSize: "28px",
      marginRight: -20,
      marginBottom: -14.5
    },

    colGridGreen: {
      color: "#FFFFFF",
      height: "180px",
      width: "180px",
      border: "3px solid #2b2d42",
      backgroundColor: "rgb(60, 199, 64)",
      lineHeight: "170px",
      fontSize: "28px",
      marginRight: -20,
      marginBottom: -14.5
    },

    btnGrid: {
      '&:hover': {
        opacity: 0.8
      },
    }
  })
);

//laranja: #E4572E

export default function FinalGame() {
  const classes = useStyles();
  const [content] = useState([
    ["Q1", "Q2", "Q3"],
    ["Q4", "Q5", "Q6"],
    ["Q7", "Q8", "Q9"],
  ]);
  const [icons, setIcons] = useState([[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]);
  const [propsToDialog, setPropsToDialog] = useState({});
  const [keyValue, setKeyValue] = useState("Q1");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectSuccess, setSelectSuccess] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [winner, setWinner] = useState({ check: false, player: -1, row: -1, col: -1, codDiag: [] });
  const [disableBox, setDisableBox] = useState([[false, false, false], [false, false, false], [false, false, false]]);


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

  useEffect(() => {
    const temp = [...icons];
    const temp1 = [...disableBox];
    const temp2 = { ...winner };

    let win = -1;

    for (let i = 0; i < temp.length; i++) {
      if (icons[i][0] === 1 && icons[i][1] === 1 && icons[i][2] === 1) {
        win = 1;
        temp2.row = i;
      } else if (icons[i][0] === 0 && icons[i][1] === 0 && icons[i][2] === 0) {
        win = 0;
        temp2.row = i;
      } else if (icons[0][i] === 1 && icons[1][i] === 1 && icons[2][i] === 1) {
        win = 1;
        temp2.col = i;
      } else if (icons[0][i] === 0 && icons[1][i] === 0 && icons[2][i] === 0) {
        win = 0;
        temp2.col = i;
      }
    }

    if (icons[0][0] === 1 && icons[1][1] === 1 && icons[2][2] === 1) {
      win = 1;
      temp2.codDiag = [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }];
    } else if (icons[0][0] === 0 && icons[1][1] === 0 && icons[2][2] === 0) {
      win = 0;
      temp2.codDiag = [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }];
    } else if (icons[0][2] === 1 && icons[1][1] === 1 && icons[2][0] === 1) {
      win = 1;
      temp2.codDiag = [{ row: 0, col: 2 }, { row: 1, col: 1 }, { row: 2, col: 0 }];
    } else if (icons[0][2] === 0 && icons[1][1] === 0 && icons[2][0] === 0) {
      win = 0;
      temp2.codDiag = [{ row: 0, col: 2 }, { row: 1, col: 1 }, { row: 2, col: 0 }];
    }

    if (win != -1) {
      for (let i = 0; i < temp1.length; i++) {
        for (let j = 0; j < temp1[i].length; j++) temp1[i][j] = true;
      }
      temp2.check = true;
      temp2.player = win;

      setDisableBox(temp1);
      setSelectSuccess(true);
      setSnackbarOpen(true);
    }
    setWinner(temp2);
  }, [icons])

  const handleQuestion = (rowIdx, colIdx, key) => {
    setOpenDialog(true);
    setPropsToDialog({ rowId: rowIdx, colId: colIdx });
    setKeyValue(key);
  };

  const handleAnswer = (param) => {
    const temp = [...icons];
    const temp1 = [...disableBox];

    if (param) temp[propsToDialog.rowId][propsToDialog.colId] = 1;
    else temp[propsToDialog.rowId][propsToDialog.colId] = 0;

    temp1[propsToDialog.rowId][propsToDialog.colId] = true;
    setIcons(temp);
    setDisableBox(temp1);
  }

  const close = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <div className={classes.containerDiv}>
        <Header title="Final Game" />

        <Grid container style={{ padding: "0 5vw 4vh 5vw" }}>
          {content.map((value, idx) => (
            <Grid key={`row${idx}`} item xs={12} className={classes.rowGrid}>
              {value.map((value1, index) => (
                winner.check
                  ?
                  winner.row !== -1 && winner.row === idx
                    ?
                    <Button key={`btnQues${index}S`} disabled={disableBox[idx][index]}>
                      <Box key={`quest${index}S`} className={winner.player === 1 ? classes.colGridGreen : winner.player === 0 ? classes.colGridRed : {}}>
                        {icons[idx][index] === 0 && <ClearIcon color="#ffffff" style={{ width: "3em", height: "3em", marginTop: "2.2em" }} />}
                        {icons[idx][index] === 1 && <CircleOutlinedIcon color="#ffffff" style={{ width: "3em", height: "3em", marginTop: "2.2em" }} />}
                      </Box>
                    </Button>
                    : winner.col !== -1 && winner.col === index
                      ?
                      <Button key={`btnQues${index}SA`} disabled={disableBox[idx][index]}>
                        <Box key={`quest${index}SA`} className={winner.player === 1 ? classes.colGridGreen : winner.player === 0 ? classes.colGridRed : {}}>
                          {icons[idx][index] === 0 && <ClearIcon color="#ffffff" style={{ width: "3em", height: "3em", marginTop: "2.2em" }} />}
                          {icons[idx][index] === 1 && <CircleOutlinedIcon color="#ffffff" style={{ width: "3em", height: "3em", marginTop: "2.2em" }} />}
                        </Box>
                      </Button>
                      : winner.col === -1 && winner.row === -1
                        ?
                        winner.codDiag.map((a, i) => (
                          a.col === index && a.row === idx ?
                            <Button key={`bQues${index}SA`} disabled={disableBox[idx][index]}>
                              <Box key={`qut${index}A`} className={winner.player === 1 ? classes.colGridGreen : winner.player === 0 ? classes.colGridRed : {}}>
                                {icons[idx][index] === 0 && <ClearIcon color="#ffffff" style={{ width: "3em", height: "3em", marginTop: "2.2em" }} />}
                                {icons[idx][index] === 1 && <CircleOutlinedIcon color="#ffffff" style={{ width: "3em", height: "3em", marginTop: "2.2em" }} />}
                              </Box>
                            </Button>
                            :
                            (a.row == idx && a.col != index) ?
                              <Button key={`btAW${index}`} disabled={disableBox[idx][index]}>
                                <Box key={`qWQ${index}`} className={classes.colGrid}>
                                  {icons[idx][index] === 0 && <ClearIcon color="error" style={{ width: "3em", height: "3em", marginTop: "2.2em" }} />}
                                  {icons[idx][index] === 1 && <CircleOutlinedIcon color="success" style={{ width: "3em", height: "3em", marginTop: "2.2em" }} />}
                                </Box>
                              </Button>
                              : <></>
                        ))
                        :
                        <Button key={`bt${index}`} disabled={disableBox[idx][index]}>
                          <Box key={`q${index}`} className={classes.colGrid}>
                            {icons[idx][index] === 0 && <ClearIcon color="error" style={{ width: "3em", height: "3em", marginTop: "2.2em" }} />}
                            {icons[idx][index] === 1 && <CircleOutlinedIcon color="success" style={{ width: "3em", height: "3em", marginTop: "2.2em" }} />}
                          </Box>
                        </Button>
                  :
                  <Button key={`btnQuestion${index}`} onClick={() => handleQuestion(idx, index, value1)} className={classes.btnGrid} disabled={disableBox[idx][index]}>
                    <Box key={`question${index}`} className={classes.colGrid}>
                      {icons[idx][index] === 0 && <ClearIcon color="error" style={{ width: "3em", height: "3em", marginTop: "2.2em" }} />}
                      {icons[idx][index] === 1 && <CircleOutlinedIcon color="success" style={{ width: "3em", height: "3em", marginTop: "2.2em" }} />}
                      {icons[idx][index] === -1 && value1}
                    </Box>
                  </Button>
              ))}
            </Grid>
          ))}
        </Grid>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={30000}
          onClose={() => setSnackbarOpen(false)}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity={winner.player === 1 ? "success" : "error" || "success"}
            sx={{ width: "100%" }}
          >
            {winner.player === 1 ? <span style={{ fontSize: "21px" }}>Audience wins</span> : <span style={{ fontSize: "21px" }}>Audience loose</span>}
          </Alert>
        </Snackbar>
        <Footer pathBack="/minigame-3" pathNext="/references" isSuccess={selectSuccess} />
      </div>
      <DialogQuestion openDialog={openDialog} close={close} handleAnswer={handleAnswer} keyQuestion={keyValue} />
    </>
  );
}
