import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import { DialogActions, DialogContent, createStyles } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const useStyles = makeStyles((theme) =>
    createStyles({
        insideDialogStyle: {
            textAlign: "center",
            backgroundColor: "#F2F4F3",
        },
        styleQuestion: {
            fontSize: "35px !important",
            color: "#2b2d42 !important",
            fontWeight: "bold !important"
        },
        dialogStyle: {
            backgroundColor: "#2b2d42",
        }
    })
);


export default function DialogQuestion(props) {
    const { openDialog, close, handleAnswer, keyQuestion } = props;
    const classes = useStyles();
    const [questions] = useState({
        "Q1": { label: "Lean Startup aims on what type of projects?", answers: ["Long Projects", "Data Science Projects", "Small Projects", "None of the above"], correct: "Small Projects" },
        "Q2": { label: "What is the process that consumes a lot of time in Data Science life cycle?", answers: ["Processing", "Data Cleaning", "Data Collection", "All above"], correct: "All above" },
        "Q3": { label: "What is the objective of using Lean Startup principles in DS projects?", answers: ["Increase the Quality of a Product", "Increase the Productivity in DS projects", "Reduce the Unncertainty of a Product", "None of the above"], correct: "Reduce the Unncertainty of a Product" },
        "Q4": { label: "A data science life cycle is an _ set of data science steps you take to deliver a project or analysis.", answers: ["iterative", "no iterative", "discrete", "compact"], correct: "iterative" },
        "Q5": { label: "What is the end goal of using Lean Startup on data science projects?", answers: ["Obtain solution in the shortest time using the least amount of resources", "Obtaining a partial solution with the estimated time using all the resources", "Obtaining a successful solution using all of the resources that we want", "None of the above"], correct: "Obtain solution in the shortest time using the least amount of resources" },
        "Q6": { label: "In Lean Sartup, MVP stands for?", answers: ["Most Valuable Product", "Minimum Viable Product", "Most Memorable Picture", "Minimum Viable Plan"], correct: "Minimum Viable Product" },
        "Q7": { label: "How is tested the MVP on DS projects using Lean Startup?", answers: ["Tested and evaluated based on customer metrics and developers feedback", "MVP is not tested", "Tested and evaluated based on software tests and developers feedback", "Tested and evaluated based on the business metrics and costumer feedback"], correct: "Tested and evaluated based on the business metrics and costumer feedback" },
        "Q8": { label: "What is the core component of Learn Startup?", answers: ["Build-Measure-Learn", "Analyze-Develop-Write", "Test-Measure-Build", "Build-Test-Learn"], correct: "Build-Measure-Learn" },
        "Q9": { label: "How we call the method that transform raw data into features that better represent the fundamental problem?", answers: ["Data Cleaning", "Deployment", "Data Improvement", "Feature Engineering"], correct: "Feature Engineering" }
    });
    const [answerSelected, setAnswerSelected] = useState();

    const handleAnswerCorrect = () => {

        if (questions[keyQuestion].correct === answerSelected) handleAnswer(true);
        else handleAnswer(false);

        close();
    }

    return (
        <Dialog open={openDialog} onClose={() => close()} maxWidth="lg" className={classes.dialogStyle} >
            <DialogContent className={classes.insideDialogStyle}>
                <Typography paragraph className={classes.styleQuestion}>{questions[keyQuestion].label}</Typography>
                <FormControl component="fieldset">
                    <RadioGroup name="radio-buttons-group" onChange={(event) => setAnswerSelected(event.target.value)}>
                        {questions[keyQuestion].answers.map((val, i) => (<FormControlLabel key={`formLabel${i}`} value={val} control={<Radio />} label={<span style={{ fontSize: "30px" }}>{val}</span>} />))}
                    </RadioGroup>
                </FormControl>
            </DialogContent>
            <DialogActions className={classes.insideDialogStyle}>
                <Button onClick={() => handleAnswerCorrect()}><span style={{ fontSize: "21px" }}>Verify</span></Button>
            </DialogActions>
        </Dialog>
    );

}