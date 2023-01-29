import { ReactElement } from "react";

import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";

import sx from "./styles";

const activeColor = "#44b700";
const social = [
  {
    id: "facebook",
    label: "Facebook",
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/profile.php?id=100054322902326",
    bgcolor: "#1877f2",
  },
  {
    id: "github",
    label: "Github",
    icon: <GitHub />,
    link: "https://github.com/lekhoa011159CloneShowcase",
    bgcolor: "#211F1F",
  },
  {
    id: "linkedin",
    label: "Linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/le-khoa-020a5816a/",
    bgcolor: "#0A66C2",
  },
];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    width: 30,
    height: 30,
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
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Box sx={sx.box}>
        <Card variant="outlined" sx={sx.card}>
          <CardContent sx={sx.cardContent}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4">Dang Khoa</Typography>
              <Typography variant="h6">Frontend & Mobile Developer</Typography>
            </Box>

            <Box sx={sx.socialList}>
              {social.map((item) => (
                <Tooltip key={item.id} title={item.label} placement="top">
                  <Link href={item.link} target="_blank">
                    <Avatar
                      sx={{ bgcolor: item.bgcolor, border: "2px solid white" }}
                    >
                      {item.icon}
                    </Avatar>
                  </Link>
                </Tooltip>
              ))}
            </Box>
          </CardContent>
        </Card>

        <StyledBadge
          variant="dot"
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Avatar sx={sx.avatar} alt="Dang Khoa" src="images/avatar.jpg" />
        </StyledBadge>
      </Box>
    </motion.div>
  );
}

export default BigAvatar;
