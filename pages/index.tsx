import { ReactElement } from "react";

import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import BigAvatar from "components/BigAvatar";
import ThemeSwitcher from "components/ThemeSwitcher";
import sx from "./styles";

const menus = [
  { id: "about", text: "About" },
  { id: "skills", text: "Skills" },
  { id: "exp", text: "Experiences" },
  { id: "projects", text: "Projects" },
  { id: "contribute", text: "Contribute" },
  { id: "contact", text: "Contact" },
];

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
