import { SxProps } from "@mui/material/styles";
import theme from "utils/theme";

const avatarSize = 130;

const sx = {
  box: {
    py: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  } satisfies SxProps,

  avatar: {
    width: avatarSize,
    height: avatarSize,
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
    fontSize: "4rem",
    fontWeight: 700,
    color: theme.palette.primary.light,
  } satisfies SxProps,

  h6: {
    fontSize: "1.25rem",
  } satisfies SxProps,
};
export default sx;
