import { Box, Container, Grid2, Typography } from "@mui/material";
import { defaultTheme } from "../../../styles/default";
import { ServiceMenu } from "./ServiceMenu";
import { ServicesContainer } from "./styles";
import { Engineering } from "./engineering";
import { Development } from "./development";
import { FireFighting } from "./fireFighting";
import { Medical } from "./medical";
import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Services() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(0);

  // Serviços movidos para o componente ServiceMenu
  const servicePaths = useMemo(
    () => ["engineering", "medical", "fire-fighting", "development"],
    []
  );

  // Sincroniza com a URL
  useEffect(() => {
    const path = location.pathname.split("/").pop();
    const index = servicePaths.findIndex((p) => p === path);
    setSelectedService(index >= 0 ? index : 0);
  }, [location, servicePaths]);

  const handleServiceSelect = (index: number) => {
    setSelectedService(index);
    navigate(`/services/${servicePaths[index]}`);
  };

  const renderContent = () => {
    switch (selectedService) {
      case 0:
        return <Engineering />;
      case 1:
        return <Medical />;
      case 2:
        return <FireFighting />;
      case 3:
        return <Development />;
      default:
        return <Engineering />;
    }
  };

  return (
    <ServicesContainer id="services">
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: 760, mb: { xs: 3, md: 4 } }}>
          <Typography
            sx={{
              color: defaultTheme["green-300"],
              fontWeight: 800,
              textTransform: "uppercase",
              fontSize: "0.78rem",
              mb: 1.5,
            }}
          >
            Soluções integradas
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: defaultTheme.white,
              fontSize: { xs: "2rem", md: "3rem" },
              lineHeight: 1.08,
            }}
          >
            Serviços para manter sua empresa segura, regular e produtiva.
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.76)",
              mt: 2,
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            Escolha uma área para ver como a Mais Prevenção apoia a rotina de
            segurança, saúde ocupacional e desenvolvimento das equipes.
          </Typography>
        </Box>

        <Grid2 container spacing={2} direction="column">
          <Grid2 size={{ xs: 12 }}>
            <Box
              sx={{
                width: "100%",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  overflowX: "auto",
                  py: 1,
                  px: { xs: 1, md: 2 },
                }}
              >
                <ServiceMenu
                  selectedService={selectedService}
                  setSelectedService={handleServiceSelect}
                />
              </Box>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <Box
              sx={{
                bgcolor: defaultTheme.white,
                borderRadius: 2,
                p: { xs: 2, md: 3 },
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.22)",
                border: `1px solid rgba(255,255,255,0.18)`,
              }}
            >
              {renderContent()}
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </ServicesContainer>
  );
}
