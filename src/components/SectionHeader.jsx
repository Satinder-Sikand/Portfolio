import React from "react";

import { Box, Typography, useTheme } from "@mui/material";

function SectionHeader({ children }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", sm: "center", md: "flex-start" },
        mb: 6,
        paddingTop: "10px",
        width: "100%",
      }}
    >
      <Typography
        variant="h5"
        className="section-header"
        sx={{
          display: "flex",
          alignItems: "center",
          color: theme.palette.text.secondary,
          position: "relative",
          "&:hover": {
            color: theme.palette.primary.main,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "2px",
            background: `linear-gradient(2deg, transparent, ${theme.palette.primary.main}, transparent)`,
            transition: "background 0.3s ease",
            animation: "pulse 3s infinite",
            "@keyframes pulse": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0.5 },
            },
          },
          "&:hover::after": {
            background: `linear-gradient(2deg, transparent, ${theme.palette.text.secondary}, transparent)`,
            // transition: "background 2s ease",
          },
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

export default SectionHeader;
