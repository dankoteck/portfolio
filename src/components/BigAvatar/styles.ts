import { SxProps } from "@mui/material/styles";
import theme from "utils/theme";

const avatarSize = 300;

const sx = {
  box: {
    position: "relative",
    width: avatarSize,
    margin: "0 auto",
    pt: theme.spacing(10),
  } satisfies SxProps,

  avatar: {
    width: avatarSize,
    height: avatarSize,
    outline: `6px solid ${theme.palette.primary.main}`,
    position: "relative",
  } satisfies SxProps,

  card: {
    width: "98.5%",
    height: 270,
    bgcolor: theme.palette.primary.dark,
    color: "white",
    position: "absolute",
    left: "50%",
    bottom: -170,
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "flex-end",
  } satisfies SxProps,

  cardContent: {
    width: "100%",
    height: "65%",
    pb: `${theme.spacing(2)} !important`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  } satisfies SxProps,

  socialList: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(1),
  } satisfies SxProps,

  h4: {
    fontSize: "2.125rem",
  } satisfies SxProps,

  h6: {
    fontSize: "1.25rem",
  } satisfies SxProps,
};
export default sx;
