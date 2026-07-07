import { Box, Grid2, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { AboutContainer } from "./styles";

import aboutUs from "../../../assets/img/about-us.webp";
import { defaultTheme } from "../../../styles/default";
import { Container } from "../../../styles/global";

const highlights = [
  { value: "11+", label: "anos de atuação" },
  { value: "20+", label: "anos de experiência técnica" },
  { value: "60%", label: "redução potencial de riscos trabalhistas" },
];

const expertise = [
  "Elaboração de PGR e PCMSO",
  "Estruturação e suporte ao SESMT",
  "Treinamentos especializados",
  "Sinalização e combate a incêndio",
  "Consultoria em motivação, recrutamento e seleção",
];

const differentials = [
  "Clínica própria próxima ao Metrô Vila Matilde",
  "Rede de clínicas parceiras em São Paulo",
  "Atendimento in company para exames, treinamentos e assessoria",
];

export function About() {
  return (
    <AboutContainer id="about">
      <Container>
        <Grid2 container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack spacing={2.5}>
              <Typography
                sx={{
                  color: defaultTheme["green-700"],
                  fontWeight: 800,
                  textTransform: "uppercase",
                  fontSize: "0.78rem",
                }}
              >
                Sobre a Mais Prevenção
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: defaultTheme["blue-700"],
                  fontSize: { xs: "2rem", md: "3rem" },
                  lineHeight: 1.08,
                }}
              >
                Segurança, medicina ocupacional e gestão preventiva em um só
                parceiro.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: defaultTheme["gray-600"],
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  maxWidth: 640,
                }}
              >
                Somos referência em segurança e medicina do trabalho, unindo
                atendimento consultivo, equipe multidisciplinar e soluções
                personalizadas para as demandas reais da sua empresa.
              </Typography>

              <Grid2 container spacing={1.5}>
                {highlights.map((item) => (
                  <Grid2 key={item.label} size={{ xs: 12, sm: 4 }}>
                    <Box
                      sx={{
                        height: "100%",
                        border: `1px solid ${defaultTheme["gray-100"]}`,
                        borderTop: `5px solid ${defaultTheme["green-300"]}`,
                        borderRadius: 2,
                        bgcolor: defaultTheme.white,
                        p: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          color: defaultTheme["blue-700"],
                          fontWeight: 900,
                          fontSize: "1.9rem",
                          lineHeight: 1,
                        }}
                      >
                        {item.value}
                      </Typography>
                      <Typography
                        sx={{
                          color: defaultTheme["gray-500"],
                          fontWeight: 700,
                          fontSize: "0.84rem",
                          mt: 1,
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  </Grid2>
                ))}
              </Grid2>
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                border: `1px solid ${defaultTheme["gray-100"]}`,
                boxShadow: "0 24px 60px rgba(16, 42, 67, 0.14)",
              }}
            >
              <Box
                component="img"
                src={aboutUs}
                alt="Equipe de segurança e medicina do trabalho"
                sx={{
                  width: "100%",
                  aspectRatio: { xs: "4 / 3", md: "5 / 4" },
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  p: 2.5,
                  color: defaultTheme.white,
                  background:
                    "linear-gradient(180deg, rgba(11,39,66,0) 0%, rgba(11,39,66,0.92) 100%)",
                }}
              >
                <Typography sx={{ fontWeight: 800 }}>
                  Atendimento técnico com visão prática de operação.
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: "100%",
                bgcolor: defaultTheme.white,
                borderRadius: 2,
                p: { xs: 2.5, md: 3 },
                border: `1px solid ${defaultTheme["gray-100"]}`,
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: defaultTheme["blue-700"], fontWeight: 800, mb: 2 }}
              >
                Nossa expertise inclui
              </Typography>
              <Stack spacing={1.4}>
                {expertise.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      color: defaultTheme["gray-700"],
                      fontWeight: 700,
                      display: "flex",
                      gap: 1.2,
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: defaultTheme["green-500"],
                        fontSize: 20,
                        mt: "2px",
                      }}
                    />
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: "100%",
                bgcolor: defaultTheme["blue-700"],
                borderRadius: 2,
                p: { xs: 2.5, md: 3 },
                border: `1px solid ${defaultTheme["blue-600"]}`,
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: defaultTheme.white, fontWeight: 800, mb: 2 }}
              >
                Como atuamos
              </Typography>
              <Stack spacing={1.4}>
                {differentials.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      color: "rgba(255,255,255,0.84)",
                      fontWeight: 700,
                      display: "flex",
                      gap: 1.2,
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: defaultTheme["yellow-300"],
                        fontSize: 20,
                        mt: "2px",
                      }}
                    />
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </AboutContainer>
  );
}
