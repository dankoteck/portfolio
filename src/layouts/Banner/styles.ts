import { SxProps } from "@mui/material";
import theme, { ruthie } from "utils/theme";

const sx = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  } satisfies SxProps,

  logoContainer: {
    zIndex: 1,
  } satisfies SxProps, // for not let Image banner overlapped

  logo: {
    fontFamily: ruthie.style.fontFamily,
    fontSize: "3rem",
    color: "white",
  } satisfies SxProps,
};

export default sx;
