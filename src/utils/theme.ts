import { Ruthie, K2D } from "@next/font/google";
import { createTheme } from "@mui/material/styles";

export const ruthie = Ruthie({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const k2d = K2D({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#9E10A2",
    },
  },
  typography: {
    fontFamily: k2d.style.fontFamily,
  },
});

export default theme;
