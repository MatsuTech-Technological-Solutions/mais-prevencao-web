import { Box, Typography, Tabs, Tab } from "@mui/material";
import { defaultTheme } from "../../../../styles/default";
import engImage from "../../../../assets/img/engineer-area.png";
import { ServiceData } from "../../../../types/services";
import { useState } from "react";

export const engineeringData: ServiceData = {
  icon: (
    <Box
      component="img"
      src={engImage}
      alt="Engenharia"
      sx={{
        width: 80,
        height: 80,
        objectFit: "contain",
        borderRadius: "16px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
        border: `3px solid ${defaultTheme["orange-400"]}`,
      }}
    />
  ),
  title: "Engenharia e Segurança do Trabalho",
  description:
    "A Engenharia de Segurança do Trabalho é essencial para garantir ambientes de trabalho seguros, reduzindo riscos de acidentes e doenças ocupacionais.",
  details: [
    "Gerenciamento de Riscos Ocupacionais (GRO) e PGR",
    "Segurança em Máquinas e Equipamentos",
    "Análises de Risco e Laudos Técnicos",
    "Projetos de Ergonomia",
    "Treinamentos de Segurança",
  ],
  path: "engineering",
};

export function Engineering() {
  const [selectedTab, setSelectedTab] = useState(0);

  const subServices = [
    {
      title: "GRO e PGR",
      description: "Gerenciamento de Riscos Ocupacionais",
      details:
        "Implementação de estratégias para identificar, avaliar e mitigar riscos no ambiente de trabalho, conforme a NR 1.",
    },
    {
      title: "Segurança em Máquinas",
      description: "Adequação à NR 12",
      details:
        "Adequação de máquinas e equipamentos aos requisitos da NR 12, garantindo segurança na operação e prevenindo acidentes.",
    },
    {
      title: "Análises e Laudos",
      description: "Laudos Técnicos Especializados",
      details:
        "Emissão de LTCAT (Laudo Técnico das Condições Ambientais de Trabalho), avaliações de insalubridade e periculosidade conforme as NRs 15 e 16.",
    },
    {
      title: "Ergonomia",
      description: "Projetos de Melhoria das Condições de Trabalho",
      details:
        "Estudos ergonômicos completos para aumentar a produtividade e reduzir o risco de doenças ocupacionais, seguindo a NR 17.",
    },
    {
      title: "Treinamentos",
      description: "Capacitação em Segurança",
      details:
        "Capacitação para equipes sobre práticas seguras, uso correto de EPIs (Equipamentos de Proteção Individual) e conformidade com as normas regulamentadoras.",
    },
  ];

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={selectedTab}
          onChange={(_, newValue) => setSelectedTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTab-root.Mui-selected": {
              color: defaultTheme["orange-400"],
            },
          }}
        >
          {subServices.map((service, index) => (
            <Tab key={index} label={service.title} />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ p: 3, bgcolor: "background.paper", borderRadius: 2 }}>
        <Typography
          variant="h6"
          gutterBottom
          color={defaultTheme["orange-400"]}
        >
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
