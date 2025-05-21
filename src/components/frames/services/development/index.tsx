import { Box, Typography, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { defaultTheme } from "../../../../styles/default";

export function Development() {
  const [selectedTab, setSelectedTab] = useState(0);

  const subServices = [
    {
      title: "Auditorias e Inspeções",
      description: "Diagnóstico de Segurança",
      details: "Diagnóstico completo das condições de trabalho para garantir conformidade com a legislação vigente."
    },
    {
      title: "Documentos Obrigatórios",
      description: "Conformidade Legal",
      details: "Desenvolvimento de PGR, PCMSO, LTCAT, PPP e outros relatórios técnicos necessários para evitar passivos trabalhistas."
    },
    {
      title: "Treinamento e Capacitação",
      description: "Desenvolvimento Profissional",
      details: "Cursos presenciais e online para conscientizar colaboradores sobre segurança no ambiente de trabalho."
    },
    {
      title: "Análise de Acidentes",
      description: "Prevenção e Investigação",
      details: "Identificação das causas de acidentes e elaboração de medidas preventivas para evitar novas ocorrências."
    },
    {
      title: "Gestão de EPIs e EPCs",
      description: "Proteção e Segurança",
      details: "Acompanhamento do uso correto de Equipamentos de Proteção Individual e Coletiva, garantindo conformidade com as normas de segurança."
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
              color: defaultTheme["yellow-400"]
            }
          }}
        >
          {subServices.map((service, index) => (
            <Tab key={index} label={service.title} />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color={defaultTheme["yellow-400"]}>
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