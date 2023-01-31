import { ReactElement, useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Box, Button, Drawer, useMediaQuery } from "@mui/material";

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

function Menu(): ReactElement {
  const smallScreen = useMediaQuery("(max-width:1020px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box>
      {smallScreen ? (
        <Box sx={sx.menuIconContainer}>
          <Button onClick={handleToggleDrawer}>
            <MenuOpenIcon sx={sx.menuIcon} />
          </Button>
        </Box>
      ) : (
        <Box sx={sx.navbar}>
          {menus.map((item) => (
            <Button sx={sx.navbarItem} key={item.id}>
              {item.text}
            </Button>
          ))}
          <ThemeSwitcher sx={sx.navbarItem} defaultChecked />
        </Box>
      )}

      <Drawer
        PaperProps={{
          sx: { width: 300 },
        }}
        anchor="right"
        open={drawerOpen}
        onClose={handleToggleDrawer}
      >
        <h1>Hello</h1>
      </Drawer>
    </Box>
  );
}

export default Menu;
