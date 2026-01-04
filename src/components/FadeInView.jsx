import { useRef } from "react";
import { Box } from "@mui/material";
import { useInView } from "framer-motion"; // or use react-intersection-observer

function FadeInSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Box
      ref={ref}
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        padding: 0,
        margin: 0,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.6s ease, transform 1s ease",
      }}
    >
      {children}
    </Box>
  );
}

export default FadeInSection;
