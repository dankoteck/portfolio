import { SxProps } from "@mui/material";
import theme from "utils/theme";

const sx = {
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
    pt: 1,
  } satisfies SxProps,

  navbarItem: {
    color: "white",
    mr: 2,
  } satisfies SxProps,

  menuIcon: {
    fontSize: "3rem",
  } satisfies SxProps,

  menuIconContainer: {
    py: 1.5,
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-end",
  } satisfies SxProps,
};

export default sx;
