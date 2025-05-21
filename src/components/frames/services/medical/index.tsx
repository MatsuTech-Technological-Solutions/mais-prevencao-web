import { Box, Typography, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { defaultTheme } from "../../../../styles/default";

export function Medical() {
  const [selectedTab, setSelectedTab] = useState(0);

  const subServices = [
    {
      title: "PCMSO",
      description: "Programa de Controle Médico de Saúde Ocupacional",
      details: "Elaboração e acompanhamento do PCMSO conforme a NR 7, garantindo a realização de exames médicos obrigatórios."
    },
    {
      title: "Exames Ocupacionais",
      description: "Avaliações Médicas Completas",
      details: "Realização de exames admissionais, periódicos, de retorno ao trabalho, mudança de função e demissionais, conforme as necessidades da empresa."
    },
    {
      title: "Acompanhamento e Retorno",
      description: "Monitoramento de Afastamentos",
      details: "Monitoramento da saúde dos colaboradores e elaboração de programas de reabilitação ocupacional."
    },
    {
      title: "Campanhas de Saúde",
      description: "Promoção do Bem-Estar",
      details: "Promoção de ações preventivas como vacinação, palestras e programas de qualidade de vida para reduzir afastamentos e melhorar a produtividade."
    },
    {
      title: "Gestão de Absenteísmo",
      description: "Controle e Prevenção",
      details: "Controle de doenças ocupacionais e avaliação de medidas para reduzir impactos na produtividade da empresa."
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
        >
          {subServices.map((service, index) => (
            <Tab key={index} label={service.title} />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color={defaultTheme["blue-300"]}>
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