import { Button } from "@mui/material";

export default function CustomButton(props) {
  return (
    <Button
      variant={props.variant || "contained"}
      size={props.size || "large"}
      color={props.color || "primary"}
      sx={props.sx || {}}
      onClick={props.onClick}
      disabled={props.disabled || false}
    >
      {props.text}
    </Button>
  );
}
