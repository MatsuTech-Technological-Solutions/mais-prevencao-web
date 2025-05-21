import { Box, Typography, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { defaultTheme } from "../../../../styles/default";

export function FireFighting() {
  const [selectedTab, setSelectedTab] = useState(0);

  const subServices = [
    {
      title: "Brigada de Incêndio",
      description: "Treinamento e Formação",
      details: "Formação de brigadistas conforme a NR 23, com técnicas de combate a incêndios, evacuação de emergência e uso de extintores."
    },
    {
      title: "PPCI",
      description: "Plano de Prevenção e Proteção Contra Incêndios",
      details: "Desenvolvimento de planos de prevenção, incluindo instalação de alarmes, extintores e sistemas de combate a incêndios."
    },
    {
      title: "Simulados de Evacuação",
      description: "Preparação para Emergências",
      details: "Testes práticos para preparar funcionários em casos de emergência, garantindo respostas rápidas e eficazes."
    },
    {
      title: "Sinalização e Equipamentos",
      description: "Infraestrutura de Segurança",
      details: "Instalação de placas de sinalização, iluminação de emergência, extintores e hidrantes conforme as normas do Corpo de Bombeiros."
    },
    {
      title: "Produtos Perigosos",
      description: "Gestão de Inflamáveis e Combustíveis",
      details: "Adequação de instalações conforme a NR 20, garantindo segurança no armazenamento e manuseio de substâncias perigosas."
    }
  ];

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={selectedTab} 
          onChange={(_, newValue) => setSelectedTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root.Mui-selected': {
              color: defaultTheme["red-500"]
            }
          }}
        >
          {subServices.map((service, index) => (
            <Tab key={index} label={service.title} />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color={defaultTheme["red-500"]}>
          {subServices[selectedTab].title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {subServices[selectedTab].description}
        </Typography>
        <Typography variant="body1">
          {subServices[selectedTab].details}
        </Typography>
      </Box>
    </Box>
  );
}