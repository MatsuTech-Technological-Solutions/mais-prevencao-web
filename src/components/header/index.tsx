import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { defaultTheme } from "../../styles/default";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import { Container } from "../../styles/global";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const menuItems = [
    { text: "Início", href: "#home" },
    { text: "Sobre Nós", href: "#about" },
    { text: "Serviços", href: "#services" },
    { text: "Contato", href: "#contact" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth",
    });
    setMobileOpen(false); // Close drawer after click
  };

  const handleLogoClick = async () => {
    await navigate("/");
    window.scrollTo(0, 0);
  };

  const drawer = (
    <List sx={{ pt: 2 }}>
      {menuItems.map((item) => (
        <ListItemButton
          key={item.text}
          component="a"
          href={item.href}
          onClick={(e) => handleScroll(e, item.href)}
          sx={{
            color: "white",
            px: 3,
            py: 1.5,
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.08)",
            },
          }}
        >
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </List>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(247, 250, 252, 0.94)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${defaultTheme["gray-100"]}`,
        zIndex: 1200,
        boxShadow: "0 12px 30px rgba(16, 42, 67, 0.08)",
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ minHeight: { xs: 72, md: 86 } }}>
          <Box
            component="img"
            onClick={handleLogoClick}
            sx={{
              height: { xs: 44, sm: 52, md: 64 },
              width: "auto",
              maxHeight: { xs: 44, sm: 52, md: 64 },
              maxWidth: { xs: 176, sm: 220, md: 270 },
              cursor: "pointer",
            }}
            alt="Mais Prevenção"
            src={logo}
          />

          {isMobile ? (
            <>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={() => setMobileOpen(!mobileOpen)}
                sx={{
                  ml: "auto",
                  color: defaultTheme["blue-500"],
                  border: `1px solid ${defaultTheme["blue-100"]}`,
                  "&:hover": {
                    backgroundColor: defaultTheme["blue-100"],
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                PaperProps={{
                  sx: {
                    backgroundColor: defaultTheme["blue-700"],
                    width: 280,
                    "& .MuiListItem-root": {
                      color: "white",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                      },
                    },
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ ml: "auto", display: "flex", gap: 1, alignItems: "center" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component="a"
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  sx={{
                    color: defaultTheme["blue-700"],
                    position: "relative",
                    px: 1.6,
                    py: 1,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0",
                      height: "4px",
                      borderRadius: "2px",
                      bottom: "0",
                      left: "50%",
                      backgroundColor: defaultTheme["green-300"],
                      transition: "all 0.3s ease-out",
                    },
                    "&:hover::after": {
                      width: "85%",
                      left: "auto",
                    },
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button
                component="a"
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                variant="contained"
                color="primary"
                startIcon={<PhoneInTalkIcon />}
                sx={{
                  ml: 1,
                  px: 2,
                  py: 1,
                  bgcolor: defaultTheme["blue-500"],
                  "&:hover": {
                    bgcolor: defaultTheme["blue-700"],
                  },
                }}
              >
                Solicitar contato
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
