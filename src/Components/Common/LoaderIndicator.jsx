import { CircularProgress, Container } from "@mui/material";
import React from "react";

const LoaderIndicator = ({ width = 1, height = "auto", color = "primary" }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width,
        height,
      }}
    >
      <CircularProgress color={color} />
    </Container>
  );
};

export default LoaderIndicator;
