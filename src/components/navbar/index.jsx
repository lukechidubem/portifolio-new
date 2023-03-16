import { useState } from "react";

// import { useNavigate } from "react-router-dom";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DarkMode, LightMode, Menu, Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../redux/slices/auth";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const navigate = useNavigate();

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          variant="contained"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="#0099ff"
          // onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: "#0099ee",
              cursor: "pointer",
            },
          }}
        >
          LetsCodeIt
        </Typography>
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>

          {navItems.map((item, i) => {
            return (
              <Typography
                key={i}
                onClick={() => navigate(`${item.path}`)}
                sx={{
                  color: dark,
                  fontSize: "20px",
                  "&:hover": {
                    opacity: 0.7,
                    cursor: "pointer",
                  },
                }}
              >
                {item.name}
              </Typography>
            );
          })}
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>

            {navItems.map((item, i) => {
              return (
                <Typography
                  key={i}
                  onClick={() => {
                    navigate(`${item.path}`);

                    setIsMobileMenuToggled(!isMobileMenuToggled);
                  }}
                  sx={{
                    color: dark,
                    fontSize: "20px",
                    "&:hover": {
                      opacity: 0.7,
                      cursor: "pointer",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              );
            })}
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
