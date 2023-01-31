import { ReactElement } from "react";

import { GitHub } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Avatar, Badge, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import sx from "./styles";

const activeColor = "#44b700";
// const social = [
//   {
//     id: "facebook",
//     label: "Facebook",
//     icon: <FacebookIcon />,
//     link: "https://www.facebook.com/profile.php?id=100054322902326",
//     bgcolor: "#1877f2",
//   },
//   {
//     id: "github",
//     label: "Github",
//     icon: <GitHub />,
//     link: "https://github.com/lekhoa011159CloneShowcase",
//     bgcolor: "#211F1F",
//   },
//   {
//     id: "linkedin",
//     label: "Linkedin",
//     icon: <LinkedInIcon />,
//     link: "https://www.linkedin.com/in/le-khoa-020a5816a/",
//     bgcolor: "#0A66C2",
//   },
// ];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: activeColor,
    color: activeColor,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,

    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: "''",
    },
  },

  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function BigAvatar(): ReactElement {
  return (
    <Box sx={sx.box}>
      <StyledBadge
        variant="dot"
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Avatar sx={sx.avatar}>
          {/* <Image
              fill
              priority
              style={{ objectFit: "contain" }}
              alt="avatar"
              src="/images/avatar.jpg"
            /> */}
        </Avatar>
      </StyledBadge>

      <Typography sx={sx.h4}>Dang Khoa</Typography>
      <Typography sx={sx.h6}>A Creative Frontend & Mobile Developer</Typography>
    </Box>
  );
}

export default BigAvatar;
