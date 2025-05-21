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
        <Typography
          variant="h1"
          sx={{
            color: defaultTheme.whiteGhost,
            fontSize: "2rem",
            fontWeight: "bold",
            mb: 3,
          }}
        >
          Serviços
        </Typography>

        <Grid2 container spacing={2} direction="column">
          <Grid2 size={{ xs: 12 }}>
            <Box
              sx={{
                bgcolor: defaultTheme.whiteGhost,
                borderRadius: 2,
                p: { xs: 2, md: 3 },
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: "100%",
                mb: 2,
                overflow: "hidden",
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
                bgcolor: defaultTheme.whiteGhost,
                borderRadius: 2,
                p: 2,
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
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
