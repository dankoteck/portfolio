import { ReactElement } from "react";

import {
  SxProps,
  Typography,
  Container,
  Box,
  Button,
  Grid,
} from "@mui/material";

import BigAvatar from "components/BigAvatar";
import ThemeSwitcher from "components/ThemeSwitcher";
import theme, { ruthie } from "utils/theme";

const menus = [
  { id: "about", text: "About" },
  { id: "skills", text: "Skills" },
  { id: "exp", text: "Experiences" },
  { id: "projects", text: "Projects" },
  { id: "contribute", text: "Contribute" },
  { id: "contact", text: "Contact" },
];

const sx = {
  logo: {
    fontFamily: ruthie.style.fontFamily,
    color: "white",
  } satisfies SxProps,

  box: {
    py: 4,
  } satisfies SxProps,

  banner: {
    height: 750,
    backgroundImage: `url(${"images/banner.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "content-box",
    backgroundSize: "cover",
  } satisfies SxProps,

  navbar: {
    display: "flex",
    justifyContent: "flex-end",
    pt: theme.spacing(1),
  } satisfies SxProps,

  navbarItem: {
    color: "white",
    mr: theme.spacing(2),
  } satisfies SxProps,
};

export default function Home(): ReactElement {
  return (
    <Container maxWidth={false} disableGutters>
      <Container maxWidth={false} disableGutters sx={sx.banner}>
        <Container maxWidth="xl">
          <Box sx={sx.box}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h3" sx={sx.logo}>
                  &lt; Dang Khoa /&gt;
                </Typography>
              </Grid>

              <Grid item xs={8}>
                <Box sx={sx.navbar}>
                  {menus.map((item) => (
                    <Button sx={sx.navbarItem} key={item.id}>
                      {item.text}
                    </Button>
                  ))}
                  <ThemeSwitcher sx={sx.navbarItem} defaultChecked />
                </Box>
              </Grid>
            </Grid>

            <BigAvatar />
          </Box>
        </Container>
      </Container>
    </Container>
  );
}
