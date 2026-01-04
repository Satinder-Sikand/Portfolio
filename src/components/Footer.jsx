import { Box, Typography } from "@mui/material";
import Socials from "./Socials";
import Section from "./Section";

function Footer() {
  return (
    <Section id="contact">
      <Box flex="flex">
        <Typography
          variant="body1"
          sx={{
            fontSize: "3rem",
            lineHeight: 1.7,
            mb: 0,
          }}
          textAlign={"center"}
          style={{ fontSize: "0.8rem" }}
        >
          Built and designed by @Satinder-Sikand
        </Typography>
        <Socials
          size={{ xs: "0.01px", md: "6px" }}
          justifyContent={{ xs: "center" }}
        ></Socials>
      </Box>
    </Section>
  );
}

export default Footer;
