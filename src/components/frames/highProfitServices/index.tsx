import { Box, Button, Chip, Grid2, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";

import { defaultTheme } from "../../../styles/default";
import { Container } from "../../../styles/global";

const highProfitServices = [
  {
    title: "Classificação de Áreas",
    norm: "ABNT NBR IEC 60079",
    desc: "Apreciação e mapeamento de zonas de risco para atmosferas explosivas por gases, vapores e poeiras.",
    color: defaultTheme["orange-400"],
    targetCategory: "engineering",
  },
  {
    title: "Laudos NR-12",
    norm: "NR 12",
    desc: "Apreciação de riscos em máquinas e equipamentos com inventário e laudo de conformidade.",
    color: defaultTheme["orange-500"],
    targetCategory: "engineering",
  },
  {
    title: "Inspeções NR-13",
    norm: "NR 13",
    desc: "Inspeção técnica e laudos para vasos de pressão, caldeiras, tubulações e tanques metálicos.",
    color: defaultTheme["red-500"],
    targetCategory: "engineering",
  },
  {
    title: "SPDA e Instalações Elétricas",
    norm: "NR 10 & ABNT 5419",
    desc: "Laudo de para-raios (SPDA), medição de aterramento, PIE e termografia de painéis.",
    color: defaultTheme["blue-500"],
    targetCategory: "engineering",
  },
  {
    title: "PGR e PCMSO Integrados",
    norm: "NR 01 & NR 07",
    desc: "Gerenciamento de riscos ocupacionais integrado com exames médicos e eventos eSocial.",
    color: defaultTheme["green-500"],
    targetCategory: "safety-management",
  },
  {
    title: "Gestão de SST para Obras",
    norm: "NR 18",
    desc: "Coordenação presencial, PGR da obra, liberações de frentes e fiscalização técnica.",
    color: defaultTheme["yellow-500"],
    targetCategory: "construction",
  },
  {
    title: "Gestão de Terceiros e Contratadas",
    norm: "Conformidade Legal",
    desc: "Auditoria documental e controle de conformidade legal de fornecedores e prestadores.",
    color: defaultTheme["blue-700"],
    targetCategory: "safety-management",
  },
  {
    title: "Avaliações de Higiene Ocupacional",
    norm: "NHOs FUNDACENTRO",
    desc: "Medições quantitativas de ruído (dosimetria), calor (IBUTG), vibração, químicos e agentes biológicos.",
    color: defaultTheme["blue-300"],
    targetCategory: "hygiene",
  },
  {
    title: "Gestão de Riscos Psicossociais",
    norm: "NR 01 Atualizada",
    desc: "Diagnóstico e plano de ação para prevenção do estresse, burnout e fatores mentais no trabalho.",
    color: defaultTheme["green-700"],
    targetCategory: "ergonomics",
  },
  {
    title: "Consultoria em ISO 45001 e 14001",
    norm: "Normas Internacionais",
    desc: "Implantação, auditoria interna e devido diagnóstico para certificações ambientais e de SST.",
    color: defaultTheme["blue-600"],
    targetCategory: "consulting",
  },
];

export function HighProfitServices() {
  const handleCardClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="featured-services"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: defaultTheme["gray-50"],
        borderTop: `1px solid ${defaultTheme["gray-100"]}`,
        borderBottom: `1px solid ${defaultTheme["gray-100"]}`,
      }}
    >
      <Container>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
          <Chip
            icon={<StarIcon sx={{ fontSize: 16, color: `${defaultTheme["yellow-400"]} !important` }} />}
            label="Especialidades & Alta Rentabilidade"
            sx={{
              bgcolor: defaultTheme.white,
              border: `1px solid ${defaultTheme["gray-200"]}`,
              color: defaultTheme["blue-700"],
              fontWeight: 800,
              px: 1,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              color: defaultTheme["blue-700"],
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: 900,
              maxWidth: 780,
            }}
          >
            Laudos Técnicos e Soluções Estratégicas para Empresas
          </Typography>
          <Typography
            sx={{
              color: defaultTheme["gray-600"],
              fontSize: "1.05rem",
              maxWidth: 680,
            }}
          >
            Conheça os serviços mais procurados da Mais Prevenção para regularização junto aos órgãos fiscais, eSocial e Ministério do Trabalho.
          </Typography>
        </Stack>

        <Grid2 container spacing={2.5}>
          {highProfitServices.map((item) => (
            <Grid2 key={item.title} size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
              <Box
                onClick={() => handleCardClick("#services")}
                sx={{
                  height: "100%",
                  bgcolor: defaultTheme.white,
                  border: `1px solid ${defaultTheme["gray-200"]}`,
                  borderTop: `4px solid ${item.color}`,
                  borderRadius: 2,
                  p: 2.5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "all 0.25s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 30px rgba(16, 42, 67, 0.12)",
                    borderColor: item.color,
                  },
                }}
              >
                <Stack spacing={1.2}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyBetween: "space-between", gap: 1 }}>
                    <Chip
                      size="small"
                      label={item.norm}
                      sx={{
                        bgcolor: `${item.color}15`,
                        color: item.color,
                        fontWeight: 800,
                        fontSize: "0.72rem",
                      }}
                    />
                    <VerifiedIcon sx={{ fontSize: 18, color: item.color, ml: "auto" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: defaultTheme["blue-700"],
                      fontWeight: 800,
                      fontSize: "1rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: defaultTheme["gray-500"],
                      fontSize: "0.86rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    mt: 2,
                    pt: 1.5,
                    borderTop: `1px dashed ${defaultTheme["gray-100"]}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: item.color,
                    fontWeight: 700,
                    fontSize: "0.82rem",
                  }}
                >
                  Saiba mais <ArrowForwardIcon sx={{ fontSize: 14 }} />
                </Box>
              </Box>
            </Grid2>
          ))}
        </Grid2>

        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => handleCardClick("#contact")}
            sx={{
              bgcolor: defaultTheme["blue-500"],
              "&:hover": { bgcolor: defaultTheme["blue-700"] },
              px: 4,
              py: 1.5,
              fontWeight: 800,
            }}
          >
            Solicitar Orçamento de Laudo / Projeto
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
