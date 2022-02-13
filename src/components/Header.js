import { Container, Typography } from "@mui/material";

export default function Header(props) {
  return (
    <Container sx={{ marginBottom: "2em" }}>
      <Typography variant={props.variant || "h2"} component={props.component || "h2"} color={props.color || "primary"}>
        {props.title}
      </Typography>
      <Typography variant="h3" component="h3" color={props.color || "primary"}>
        {props.subtitle}
      </Typography>
    </Container>
  );
}
