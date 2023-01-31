import { SxProps, tableCellClasses } from "@mui/material";
import theme from "utils/theme";

const sx = {
  container: {
    py: 8,
  } satisfies SxProps,

  avatarAboutMeWrapper: {
    border: `1px solid ${theme.palette.primary.dark}`,
    width: 300,
    height: 400,
  } satisfies SxProps,

  avatarAboutMe: {} satisfies SxProps,

  h3: {
    fontSize: "3rem",
  } satisfies SxProps,

  description: {
    fontSize: "1.25rem",
    fontWeight: 400,
  } satisfies SxProps,

  descriptionBox: {
    my: 4,
    p: 2,
    width: "98%",
    height: "fit-content",
    fontSize: "1.25rem",
    fontWeight: 400,
    border: `3px solid ${theme.palette.primary.light}`,
  } satisfies SxProps,

  descriptionTable: {
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none",
    },
  } satisfies SxProps,

  center: {
    margin: "0 auto",
  } satisfies SxProps,
};

export default sx;
