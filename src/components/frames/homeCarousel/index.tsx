import { useEffect, useState } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import {
  ArrowForward,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  VerifiedUser,
} from "@mui/icons-material";

import { defaultTheme } from "../../../styles/default";
import image1 from "../../../assets/img/background_1.png";
import image2 from "../../../assets/img/background_2.webp";
import image3 from "../../../assets/img/lecture.webp";

const carouselData = [
  {
    image: image1,
    eyebrow: "Segurança e medicina do trabalho",
    title: "Mais Prevenção",
    text: "Gestão ocupacional para empresas que precisam reduzir riscos, manter conformidade e cuidar melhor das pessoas.",
    accent: defaultTheme["green-300"],
  },
  {
    image: image2,
    eyebrow: "Atendimento em SP e in company",
    title: "Soluções completas para SST",
    text: "PGR, PCMSO, laudos, treinamentos, exames ocupacionais e suporte consultivo com equipe multidisciplinar.",
    accent: defaultTheme["yellow-300"],
  },
  {
    image: image3,
    eyebrow: "Prevenção com resultado",
    title: "Mais proteção para sua operação",
    text: "Rotinas mais seguras, documentação organizada e apoio técnico para decisões rápidas e bem fundamentadas.",
    accent: defaultTheme["red-500"],
  },
];

const trustItems = [
  "11 anos de atuação",
  "Clínica própria",
  "Atendimento in company",
];

export function HomeCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = carouselData.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
    }, 6000);
    return () => clearInterval(timer);
  }, [maxSteps]);

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "calc(100svh - 56px)", md: "calc(100vh - 48px)" },
        width: "100%",
        overflow: "hidden",
        bgcolor: defaultTheme["blue-800"],
        pt: { xs: "78px", md: "94px" },
      }}
    >
      <Box sx={{ position: "absolute", inset: 0 }}>
        {carouselData.map((item) => (
          <Box
            key={item.title}
            sx={{
              position: "absolute",
              inset: 0,
              opacity: item === carouselData[activeStep] ? 1 : 0,
              transition: "opacity 700ms ease-in-out",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                filter: "saturate(0.95) contrast(1.05)",
              }}
              src={item.image}
              alt={item.title}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(11,39,66,0.96) 0%, rgba(18,61,102,0.84) 45%, rgba(11,39,66,0.2) 100%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(11,39,66,0.18) 0%, rgba(11,39,66,0.64) 100%)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1280,
          mx: "auto",
          px: { xs: 2.5, sm: 4, lg: 8 },
          minHeight: { xs: "calc(100svh - 134px)", md: "calc(100vh - 142px)" },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: 760, color: defaultTheme.white }}>
          <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
            {[
              defaultTheme["blue-300"],
              carouselData[activeStep].accent,
              defaultTheme["red-500"],
            ].map((color, index) => (
              <Box
                key={`${color}-${index}`}
                sx={{
                  width: 42,
                  height: 8,
                  borderRadius: 1,
                  bgcolor: color,
                }}
              />
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              color: carouselData[activeStep].accent,
              fontWeight: 800,
              textTransform: "uppercase",
              fontSize: { xs: "0.75rem", md: "0.82rem" },
              mb: 2,
            }}
          >
            <VerifiedUser fontSize="small" />
            <span>{carouselData[activeStep].eyebrow}</span>
          </Stack>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.55rem", sm: "3.7rem", md: "5.2rem" },
              lineHeight: 0.95,
              maxWidth: 820,
              textShadow: "0 8px 30px rgba(0,0,0,0.24)",
            }}
          >
            {carouselData[activeStep].title}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              maxWidth: 660,
              mt: 3,
              color: "rgba(255,255,255,0.88)",
              fontSize: { xs: "1.05rem", md: "1.28rem" },
              lineHeight: 1.55,
              fontWeight: 500,
            }}
          >
            {carouselData[activeStep].text}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ mt: 4, maxWidth: { xs: 360, sm: "none" } }}
          >
            <Button
              component="a"
              href="#contact"
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                bgcolor: carouselData[activeStep].accent,
                color: defaultTheme["blue-800"],
                px: 3,
                py: 1.4,
                "&:hover": {
                  bgcolor: defaultTheme["yellow-300"],
                },
              }}
            >
              Solicitar proposta
            </Button>
            <Button
              component="a"
              href="#services"
              variant="outlined"
              sx={{
                borderColor: "rgba(255,255,255,0.7)",
                color: defaultTheme.white,
                px: 3,
                py: 1.4,
                "&:hover": {
                  borderColor: defaultTheme.white,
                  bgcolor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              Ver serviços
            </Button>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 3 }}
            sx={{ mt: 5 }}
          >
            {trustItems.map((item) => (
              <Typography
                key={item}
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: defaultTheme["green-300"],
                    flexShrink: 0,
                  }}
                />
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Box>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          right: { xs: 20, md: 64 },
          bottom: { xs: 24, md: 44 },
          zIndex: 2,
          alignItems: "center",
        }}
      >
        <IconButton
          aria-label="Slide anterior"
          onClick={handleBack}
          sx={{
            color: defaultTheme.white,
            border: "1px solid rgba(255,255,255,0.32)",
            bgcolor: "rgba(255,255,255,0.08)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.18)" },
          }}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <Stack direction="row" spacing={1} sx={{ px: 1 }}>
          {carouselData.map((item, index) => (
            <Box
              key={item.title}
              component="button"
              type="button"
              aria-label={`Ir para slide ${index + 1}`}
              onClick={() => setActiveStep(index)}
              sx={{
                width: index === activeStep ? 28 : 9,
                height: 9,
                border: 0,
                borderRadius: 8,
                cursor: "pointer",
                transition: "width 200ms ease",
                bgcolor:
                  index === activeStep
                    ? carouselData[activeStep].accent
                    : "rgba(255,255,255,0.44)",
              }}
            />
          ))}
        </Stack>
        <IconButton
          aria-label="Próximo slide"
          onClick={handleNext}
          sx={{
            color: defaultTheme.white,
            border: "1px solid rgba(255,255,255,0.32)",
            bgcolor: "rgba(255,255,255,0.08)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.18)" },
          }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Stack>
    </Box>
  );
}
