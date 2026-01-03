import React from "react";
import { Typography, useTheme } from "@mui/material";

function BodyTypography({ children }) {
  const theme = useTheme();
  return (
    <Typography
      variant="body1"
      sx={{
        color: theme.palette.text.primary,
        lineHeight: 1.7,
        mb: 3,
      }}
    >
      {children}
    </Typography>
  );
}

export default BodyTypography;
