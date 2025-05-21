import { useState, useEffect } from "react";
import { Box, MobileStepper, Button, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

import image1 from "../../../assets/img/background_1.png";
import image2 from "../../../assets/img/background_2.webp";
import image3 from "../../../assets/img/lecture.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselData = [
  {
    image: image1,
    title: "Nossa Missão",
    text: "Fornecer soluções inovadoras para nossos clientes",
  },
  {
    image: image2,
    title: "Nossa Visão",
    text: "Ser referência em qualidade e excelência",
  },
  {
    image: image3,
    title: "Nossos Valores",
    text: "Comprometimento, Inovação e Qualidade",
  },
];

export function HomeCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = carouselData.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
    }, 5000);
    return () => clearInterval(timer);
  }, [maxSteps]);

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
  };

  return (
    // <Container>
    <Box id="home" sx={{ maxWidth: "100%", flexGrow: 2, position: "relative", zIndex:1 }}>
      <Box
        sx={{
          height: "60vh", // Fixed height instead of 100vh
          width: "100%",
        }}
      >
        {carouselData.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: index === activeStep ? 1 : 0,
              transition: "opacity 500ms ease-in-out",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                filter: "brightness(0.7)",
              }}
              src={item.image}
              alt={item.title}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "50px", md: "60px" },
                left: 0,
                right: 0,
                padding: { xs: 2, md: 4 },
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                color: "white",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 2,
                zIndex: 1,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "2.5rem" },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  maxWidth: "800px",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          bgcolor: "transparent",
          zIndex: 2,
        }}
        nextButton={
          <Button size="small" onClick={handleNext} sx={{ color: "white" }}>
            Próximo
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} sx={{ color: "white" }}>
            <KeyboardArrowLeft />
            Anterior
          </Button>
        }
      />
    </Box> 
    // </Container>
  );
}
