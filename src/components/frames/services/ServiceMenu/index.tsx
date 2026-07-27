import { Box, Typography } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import BiotechIcon from "@mui/icons-material/Biotech";
import ShieldIcon from "@mui/icons-material/Shield";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ParkIcon from "@mui/icons-material/Park";
import ConstructionIcon from "@mui/icons-material/Construction";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import { defaultTheme } from "../../../../styles/default";

export const services = [
  {
    icon: <EngineeringIcon sx={{ fontSize: 32 }} />,
    title: "Engenharia de Segurança",
    color: defaultTheme["orange-400"],
    path: "engineering",
  },
  {
    icon: <MedicalServicesIcon sx={{ fontSize: 32 }} />,
    title: "Medicina do Trabalho",
    color: defaultTheme["green-300"],
    path: "medical",
  },
  {
    icon: <BiotechIcon sx={{ fontSize: 32 }} />,
    title: "Higiene Ocupacional",
    color: defaultTheme["blue-300"],
    path: "hygiene",
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 32 }} />,
    title: "Segurança & Gestão",
    color: defaultTheme["orange-500"],
    path: "safety-management",
  },
  {
    icon: <AccessibilityNewIcon sx={{ fontSize: 32 }} />,
    title: "Ergonomia (NR-17)",
    color: defaultTheme["green-500"],
    path: "ergonomics",
  },
  {
    icon: <ParkIcon sx={{ fontSize: 32 }} />,
    title: "Meio Ambiente",
    color: defaultTheme["green-700"],
    path: "environment",
  },
  {
    icon: <ConstructionIcon sx={{ fontSize: 32 }} />,
    title: "Construção Civil",
    color: defaultTheme["yellow-400"],
    path: "construction",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 32 }} />,
    title: "Treinamentos & NRs",
    color: defaultTheme["red-500"],
    path: "training",
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 32 }} />,
    title: "Consultoria & ISO",
    color: defaultTheme["blue-500"],
    path: "consulting",
  },
];

interface ServiceMenuProps {
  selectedService: number;
  setSelectedService: (index: number) => void;
}

export function ServiceMenu({
  selectedService,
  setSelectedService,
}: ServiceMenuProps) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(9, 1fr)",
          },
          gap: 1.5,
          width: "100%",
        }}
      >
        {services.map((service, index) => (
          <Box
            key={service.path}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedService(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setSelectedService(index);
              }
            }}
            sx={{
              cursor: "pointer",
              transition: "0.25s ease-in-out",
              outline: "none",
              "&:hover": { transform: "translateY(-3px)" },
              "&:focus-visible > div": {
                outline: `3px solid ${defaultTheme["yellow-300"]}`,
                outlineOffset: 2,
              },
            }}
          >
            <Box
              sx={{
                p: 1.5,
                height: "100%",
                minHeight: { xs: "90px", md: "110px" },
                bgcolor:
                  selectedService === index
                    ? defaultTheme.white
                    : "rgba(255, 255, 255, 0.08)",
                borderRadius: "8px",
                border: `1px solid ${
                  selectedService === index
                    ? service.color
                    : "rgba(255,255,255,0.18)"
                }`,
                boxShadow:
                  selectedService === index
                    ? `0 14px 28px rgba(0,0,0,0.18)`
                    : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderTop: `4px solid ${service.color}`,
                  opacity: selectedService === index ? 1 : 0.6,
                },
              }}
            >
              <Box
                sx={{
                  color:
                    selectedService === index
                      ? service.color
                      : defaultTheme.white,
                  display: "grid",
                  placeItems: "center",
                  zIndex: 1,
                  transition: "0.25s",
                }}
              >
                {service.icon}
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "0.78rem", md: "0.82rem" },
                  fontWeight: 800,
                  color:
                    selectedService === index
                      ? defaultTheme["blue-700"]
                      : defaultTheme.white,
                  textAlign: "center",
                  transition: "0.25s",
                  lineHeight: 1.2,
                  zIndex: 1,
                }}
              >
                {service.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

