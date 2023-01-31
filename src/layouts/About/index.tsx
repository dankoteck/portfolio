import { ReactElement } from "react";
import { Avatar, Box, Button, Typography, useMediaQuery } from "@mui/material";
import { default as Grid } from "@mui/material/Unstable_Grid2";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Scrollbars } from "react-custom-scrollbars-2";

import theme from "utils/theme";
import sx from "./styles";

function Thumb({ style, props }: { style: any; props: any }): ReactElement {
  const thumbStyle = { backgroundColor: "#fff", borderRadius: 3 };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
}

function About(): ReactElement {
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={sx.container}>
      <Grid container spacing={2}>
        {/* <Grid xs={12} sm={12} md={3}> */}
        <Grid xs={4}>
          <Box
            sx={{ ...sx.avatarAboutMeWrapper, ...(downMd ? sx.center : {}) }}
          >
            <Avatar sx={sx.avatarAboutMe}>
              {/* <Image width={400} height={620} alt="avatar2" src={""} /> */}
            </Avatar>
          </Box>
        </Grid>

        {/* <Grid xs={12} sm={12} md={7} mdOffset={2} lg={8} lgOffset={0}> */}
        <Grid xs={8}>
          <Typography sx={sx.h3}>About Me</Typography>
          <Typography sx={sx.description}>
            Hello, my name is Dang Khoa, a very passionate Web Developer having
            an experiences of building Web and Mobile applications with some
            other cool libraries and frameworks. I have acquired the skills
            necessary to build great and premium websites.
          </Typography>

          <Box sx={sx.descriptionBox}>
            <Scrollbars universal autoHeight renderThumbHorizontal={Thumb}>
              <Box sx={{ minWidth: 1000 }}>
                <Grid container>
                  <Grid xs={3}>
                    <Box>
                      <Typography>Birthdate: </Typography>
                      <Typography>Number phone: </Typography>
                      <Typography>Location: </Typography>
                    </Box>
                  </Grid>

                  <Grid xs={3}>
                    <Box>
                      <Typography>19/12/1998</Typography>
                      <Typography>0896450667</Typography>
                      <Typography>Ho Chi Minh city</Typography>
                    </Box>
                  </Grid>

                  <Grid xs={3}>
                    <Box>
                      <Typography>Current Position: </Typography>
                      <Typography>Experiences: </Typography>
                      <Typography>Freelance status: </Typography>
                    </Box>
                  </Grid>

                  <Grid xs={3}>
                    <Box>
                      <Typography>Frontend Developer</Typography>
                      <Typography>1 year</Typography>
                      <Typography>Available</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Scrollbars>
          </Box>

          <Button startIcon={<RemoveRedEyeIcon />} variant="contained">
            see my resumé
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
