import { Box, CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const SuspenseWrapper = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            flexGrow: 1,
            minHeight: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;
