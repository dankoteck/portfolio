import { ReactElement } from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  SxProps,
} from "@mui/material";
import Image from "next/image";
import Head from "next/head";

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
  logoContainer: {
    zIndex: 1,
  } satisfies SxProps, // for not let Image banner overlapped

  logo: {
    fontFamily: ruthie.style.fontFamily,
    fontSize: "3rem",
    color: "white",
  } satisfies SxProps,

  banner: {
    position: "relative",
    height: 750,
  } satisfies SxProps,

  bannerImage: {
    objectFit: "cover",
  } satisfies SxProps,

  box: {
    py: 4,
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
    <>
      <Head>
        <title>Perfect portfolio of Dang Khoa</title>
        <meta name="description" content="Perfect portfolio of Dang Khoa" />
      </Head>
      <main>
        <Container maxWidth={false} disableGutters>
          <Container maxWidth={false} disableGutters sx={sx.banner}>
            <Image
              fill
              priority
              alt="banner"
              src="/images/banner.jpg"
              style={sx.bannerImage}
            />
            <Container maxWidth="xl">
              <Box sx={sx.box}>
                <Grid container spacing={2}>
                  <Grid item xs={4} sx={sx.logoContainer}>
                    <Typography sx={sx.logo}>&lt; Dang Khoa /&gt;</Typography>
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
      </main>
    </>
  );
}
