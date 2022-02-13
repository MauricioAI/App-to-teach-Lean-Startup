import Grid from "@mui/material/Grid";
import {useInView} from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


export default function FullBoxGenerate(props) {
        
        const animationControl = useAnimation();

        const {inView, entry, ref} = useInView();

        if(inView) {
            animationControl.start({
                x: 0,
                rotate: 360,
                transition: {
                    delay: 0.7,
                }
            });
        }

    const { isTransparent,
        coordinates,
        coordinatesX,
        floatDirection,
        widthBox,
        backgroundColor,
        color,
        mt,
        path,
        height,
        style,
        width,
        desc,
        content
    } = props;

    return (
        <div ref={ref}>

        <motion.div
            initial={{x: "-100vw"}}
            animate={animationControl}
            className="box"
            style={{
                float: floatDirection,
                width: widthBox,
                backgroundColor: backgroundColor,
                color: color,
                marginTop: mt || 0,
                padding: "100px 0px", 
            }}> 
            <Grid container>
                {isTransparent ? <>
                    <Grid item xs={4}>
                        <img
                            src={path}
                            style={style}
                            height={height || 470}
                            width={width || 470}
                            alt={desc !== undefined ? desc : "Fotografia descritiva"}
                        />
                    </Grid>
                    <Grid item xs={8} style={{ paddingLeft: 25, paddingRight: 25 }}>
                        <div style={{ textAlign: "left" }} dangerouslySetInnerHTML={{ __html: content }} />
                    </Grid></>


                    : <>
                        <Grid item xs={8} style={{ paddingLeft: 50, paddingRight: 25 }}>
                            <div style={{ textAlign: "left" }} dangerouslySetInnerHTML={{ __html: content }} />
                        </Grid>
                        <Grid item xs={4}>
                            <img
                                src={path}
                                style={style}
                                height={height || 470}
                                width={width || 470}
                                alt={desc !== undefined ? desc : "Fotografia descritiva"}
                            />
                        </Grid></>}
            </Grid>
        </motion.div>
        </div>
    );
}