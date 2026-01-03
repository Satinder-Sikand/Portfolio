import { Box } from "@mui/material";
import React from "react";

function Section({ children, ...props }) {
  return (
    <Box
      {...props}
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        py: 6,
      }}
    >
      <Box sx={{ width: "90%", maxWidth: "1200px" }}>{children}</Box>
    </Box>
  );
}

export default Section;
