import { motion } from "framer-motion";

export default function ImageGenerate(props) {
  return (
    <motion.div
      animate={props.animate || { rotate: 10 }}
      transition={{
        ease: "linear",
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
      }}
    >
      <img
        src={props.path}
        style={props.style || { marginLeft: 35 }}
        height={props.height || 470}
        width={props.width || 470}
        alt={props.desc !== undefined ? props.desc : "Fotografia descritiva"}
      />
    </motion.div>
  );
}
