import { SxProps } from "@mui/material";
import theme, { ruthie } from "utils/theme";

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

export default sx;
