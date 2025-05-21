import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { defaultTheme } from "../../styles/default";
import { useNavigate } from 'react-router-dom';

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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth",
    });
    setMobileOpen(false); // Close drawer after click
  };

  const handleLogoClick = async () => {
    await navigate('/');
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.location.href = '/';
    }, 100);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          key={item.text}
          component="a"
          href={item.href}
          onClick={(e) => handleScroll(e, item.href)}
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.08)",
            },
          }}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: defaultTheme.whiteGhost,
        borderRadius: "0 0 16px 16px",
        zIndex: 1200,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <Container>
        <Toolbar>
          <Box
            component="img"
            onClick={handleLogoClick}
            sx={{
              height: { xs: 40, sm: 50, md: 60 },
              width: "auto",
              maxHeight: { xs: 40, sm: 50, md: 60 },
              maxWidth: { xs: 150, sm: 200, md: 250 },
              cursor: 'pointer'
            }}
            alt="Logo"
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
                  color: "#1976d2",
                  "&:hover": {
                    backgroundColor: "rgba(25, 118, 210, 0.04)",
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
                    backgroundColor: defaultTheme["blue-300"],
                    width: 240,
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
            <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component="a"
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  sx={{
                    color: "black",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0",
                      height: "4px",
                      borderRadius: "2px",
                      bottom: "0",
                      left: "50%",
                      backgroundColor: "#1976d2",
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
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
