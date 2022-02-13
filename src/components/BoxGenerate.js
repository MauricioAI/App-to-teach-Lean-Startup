import { motion } from "framer-motion";

export default function BoxGenerate(props) {
  return (
    <motion.div
      animate={{ y: props.coordinates, x: props.coordinatesX }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="box"
      style={{
        float: props.floatDirection,
        width: props.widthBox,
        backgroundColor: props.backgroundColor,
        color: props.color
      }}
    >
    <div style={{ textAlign: "left" }} dangerouslySetInnerHTML={{ __html: props.content }} />
    </motion.div>
  );
}