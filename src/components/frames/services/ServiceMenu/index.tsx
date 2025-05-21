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
    color: defaultTheme["green-300"],
    path: "engineering"
  },
  {
    icon: medImage,
    title: "Medicina do Trabalho e Ocupacional",
    color: defaultTheme["blue-300"],
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
            onClick={() => setSelectedService(index)}
            sx={{
              cursor: 'pointer',
              transition: '0.3s',
              flex: { xs: '1', md: '1' },
              minWidth: { xs: '100%', md: '150px' },
              maxWidth: { xs: '100%', md: '200px' },
              '&:hover': { transform: 'translateY(-5px)' }
            }}
          >
            <Box
              sx={{
                p: 2,
                height: '100%',
                minHeight: { xs: '80px', md: '160px' },
                bgcolor: selectedService === index ? defaultTheme["green-300"] : 'transparent',
                borderRadius: '8px',
                border: `2px solid ${service.color}`,
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2
              }}
            >
              <Box
                component="img"
                src={service.icon}
                alt={service.title}
                sx={{
                  width: { xs: '50px', md: '60px' },
                  height: { xs: '50px', md: '60px' },
                  objectFit: "contain",
                  borderRadius: "16px",
                  p: 1,
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  flexShrink: 0
                }}
              />
              <Box sx={{ 
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
              }}>
                <Typography 
                  sx={{ 
                    fontSize: { xs: '0.8rem', md: '0.9rem' },
                    fontWeight: 'bold',
                    color: selectedService === index ? defaultTheme.whiteGhost : service.color,
                    textAlign: 'center',
                    transition: '0.3s'
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