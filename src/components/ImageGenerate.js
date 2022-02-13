import { useState } from "react";
import { motion } from "framer-motion";

export default function ImageGenerate(props) {
  const [fadeRight] = useState({
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  });

  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.0 }}
    >
      <img
        src={props.path}
        style={{ marginRight: 35 }}
        height={props.height || 410}
        width={props.width || 410}
        alt={props.desc !== undefined ? props.desc : "Fotografia descritiva"}
      />
    </motion.div>
  );
}
