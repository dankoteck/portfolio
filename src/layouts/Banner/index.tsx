import { ReactElement } from "react";

import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

import BigAvatar from "components/BigAvatar";
import About from "layouts/About";
import Menu from "./Menu";

import sx from "./styles";

const motionConfig = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.8,
    delay: 0.2,
    ease: [0, 0.71, 0.2, 1.01],
  },
};

function Banner(): ReactElement {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4} sx={sx.logoContainer}>
          <Typography sx={sx.logo}>&lt; Dang Khoa /&gt;</Typography>
        </Grid>

        <Grid item xs={8}>
          <Menu />
        </Grid>
      </Grid>

      <Box sx={sx.container}>
        <motion.div {...motionConfig}>
          <BigAvatar />
          <About />
        </motion.div>
      </Box>
    </Box>
  );
}

export default Banner;
