import { Box, Typography } from "@mui/material";
import { defaultTheme } from "../../../../styles/default";
import engImage from "../../../../assets/img/engineer-area.png";
import medImage from "../../../../assets/img/medical-area.png";
import fireImage from "../../../../assets/img/fire-fighting-area.png";
import devImage from "../../../../assets/img/development-area.png";

const services = [
  {
    icon: engImage,
    title: "Engenharia de Segurança",
    color: defaultTheme["orange-400"],
    path: "engineering"
  },
  {
    icon: medImage,
    title: "Medicina do Trabalho e Ocupacional",
    color: defaultTheme["green-300"],
    path: "medical"
  },
  {
    icon: fireImage,
    title: "Brigada de Incêndio",
    color: defaultTheme["red-600"],
    path: "fire-fighting"
  },
  {
    icon: devImage,
    title: "Motivação e Desenvolvimento",
    color: defaultTheme["yellow-300"],
    path: "development"
  }
];

interface ServiceMenuProps {
  selectedService: number;
  setSelectedService: (index: number) => void;
}

export function ServiceMenu({ selectedService, setSelectedService }: ServiceMenuProps) {
  return (
    <Box sx={{ 
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
        justifyContent: 'center',
        alignItems: 'stretch',
        flexWrap: 'wrap'
      }}>
        {services.map((service, index) => (
          <Box
            key={index}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedService(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setSelectedService(index);
              }
            }}
            sx={{
              cursor: 'pointer',
              transition: '0.3s',
              flex: { xs: '1', md: '1' },
              minWidth: { xs: '100%', md: '180px' },
              maxWidth: { xs: '100%', md: '240px' },
              outline: "none",
              '&:hover': { transform: 'translateY(-4px)' },
              '&:focus-visible > div': {
                outline: `3px solid ${defaultTheme["yellow-300"]}`,
                outlineOffset: 3
              }
            }}
          >
            <Box
              sx={{
                p: { xs: 1.6, md: 2 },
                height: '100%',
                minHeight: { xs: '88px', md: '172px' },
                bgcolor: selectedService === index ? defaultTheme.white : 'rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                border: `1px solid ${selectedService === index ? service.color : "rgba(255,255,255,0.18)"}`,
                boxShadow: selectedService === index ? `0 18px 36px rgba(0,0,0,0.18)` : "none",
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderTop: `5px solid ${service.color}`,
                  opacity: selectedService === index ? 1 : 0.7,
                }
              }}
            >
              <Box
                component="img"
                src={service.icon}
                alt={service.title}
                sx={{
                  width: { xs: '54px', md: '64px' },
                  height: { xs: '54px', md: '64px' },
                  objectFit: "contain",
                  borderRadius: 2,
                  p: 1,
                  bgcolor: selectedService === index ? defaultTheme.whiteGhost : "rgba(255, 255, 255, 0.14)",
                  flexShrink: 0,
                  zIndex: 1
                }}
              />
              <Box sx={{ 
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                zIndex: 1
              }}>
                <Typography 
                  sx={{ 
                    fontSize: { xs: '0.88rem', md: '0.96rem' },
                    fontWeight: 800,
                    color: selectedService === index ? defaultTheme["blue-700"] : defaultTheme.white,
                    textAlign: 'center',
                    transition: '0.3s',
                    lineHeight: 1.25
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
