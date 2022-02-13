import React, { useEffect, useMemo } from 'react';
import { tsParticles } from "tsparticles";
import { mainConfig } from "../assets/particlesjs-config";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { createStyles, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) =>
    createStyles({
        containerDiv: {
            textAlign: "center",
            backgroundColor: "#2b2d42",
            height: "100%"
        },
        styleParagraph: {
            color: "white",
            fontSize: "21px"
        },
        styleShowParagraph: {
            margin: "100px 50px"
        }
    })
);

export default function References() {
    const classes = useStyles();

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

    const references = useMemo(() => [
        "[1] ‘What is Data Science?’ https://www.oracle.com/data-science/what-is-data-science/ (accessed Jan. 13, 2022)",
        "[2] Nobel, Carmen. Teaching a ‘Lean Startup’Strategy. HBS Working Knowledge (2011): 1-2.",
        "[3] Eisenmann, Thomas R., Eric Ries, and Sarah Dillard. Hypothesis-driven entrepreneurship: The lean startup. Harvard Business School Entrepreneurial Management Case 812-095 (2012).",
        "[4] ‘What is a Data Science Life Cycle? - Data Science Process Alliance’. https://www.datascience-pm.com/data-science-life-cycle/ (accessed Jan. 13, 2022).",
        "[5] ‘The Lean Startup | The Movement That Is Transforming How New Products Are Built And Launched’. http://theleanstartup.com/ (accessed Jan. 13, 2022).",
        "[6] ‘Lean Startup’, Investopedia. https://www.investopedia.com/terms/l/lean-startup.asp (accessed Jan. 13, 2022).",
        "[7] ‘Data Science 101 : Life Cycle of a Data Science Project | by Abraham Enyo-one Musa | Towards Data Science’. https://towardsdatascience.com/data-science-101-life-cycle-of-a-data-science-project-86cbc4a2f7f0 (accessed Jan. 13, 2022).",
        "[8] marktab, ‘The Team Data Science Process lifecycle - Azure Architecture Center’. https://docs.microsoft.com/en-us/azure/architecture/data-science-process/lifecycle (accessed Jan. 13, 2022).",
        "[9] C. Lounge, ‘Data Science project life cycle’, Co-Learning Lounge, Oct. 01, 2021. https://medium.com/co-learning-lounge/complete-data-science-project-life-cycle-9eae6e4ed4c9 (accessed Jan. 13, 2022).",
        "[10] M. González-Fierro, ‘How to Develop a Data Science Project using the Lean Startup Method’. https://miguelgfierro.com/blog/2016/how-to-develop-a-data-science-project-using-the-lean-startup-method/ (accessed Jan. 13, 2022).",
        "[11] S. H. Seggie, E. Soyer, and K. H. Pauwels, ‘Combining big data and lean startup methods for business model evolution’, AMS Rev, vol. 7, no. 3, pp. 154–169, Dec. 2017, doi: 10.1007/s13162-017-0104-9.",
        "[12] ‘A Lean Start-up Approach to Data Science’, AI & Big Data Expo - Conference and Exhibition, Mar. 04, 2019. https://www.ai-expo.net/a-lean-start-up-approach-to-data-science/ (accessed Jan. 13, 2022).",
        "[13] G. Author, ‘The Lean Startup Model in Data Science Products’, CupertinoTimes, Jun. 27, 2020. https://cupertinotimes.com/the-lean-startup-model-in-data-science-products/ (accessed Jan. 13, 2022)."], [])

    return (
        <div className={classes.containerDiv}>
            <Header title="References" />
            <div className={classes.styleShowParagraph}>
                {references.map((ref) => <Typography paragraph align="justify" className={classes.styleParagraph}>{ref}</Typography>)}
            </div>
            <Footer pathBack="/finalgame" pathNext="/" isSuccess={true} />
        </div>
    );
}