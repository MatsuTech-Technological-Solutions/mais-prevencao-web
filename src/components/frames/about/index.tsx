import { Box, Grid2, Typography, useMediaQuery, useTheme } from "@mui/material";

import { AboutContainer } from "./styles";

import aboutUs from "../../../assets/img/about-us.png";
import { defaultTheme } from "../../../styles/default";
import { Container } from "../../../styles/global";

export function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AboutContainer id="about">
      <Container>
        <Grid2 container spacing={4} mb={6}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography variant="h4" fontWeight="bold" color="primary">
                Sobre Nós
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 600 }}
                color={defaultTheme["gray-900"]}
              >
                Na <strong>Mais Prevenção</strong>, somos referência em{" "}
                <strong>Segurança e Medicina do Trabalho</strong> há 11 anos.
                Combinamos atendimento consultivo com soluções personalizadas,
                analisando cada necessidade para oferecer propostas estratégicas
                às demandas reais da sua empresa.
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Atuamos com uma{" "}
                <strong>clínica própria na Zona Leste de SP</strong> (próxima ao
                Metrô Vila Matilde), <strong>rede de clínicas parceiras</strong>{" "}
                em diversas regiões do estado e sistema{" "}
                <strong>In Company</strong> - levamos exames, treinamentos e
                assessoria diretamente ao seu negócio.
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Contamos com equipe multidisciplinar de alto nível:{" "}
                <strong>
                  Médicos do Trabalho, Engenheiros de Segurança, Enfermeiros,
                  Fonoaudiólogos e Peritos Judiciais
                </strong>
                , todos com mais de 20 anos de experiência em saúde ocupacional.
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Nossas soluções reduzem{" "}
                <strong>até 60% dos riscos trabalhistas </strong> através da
                prevenção eficaz de acidentes, controle de doenças ocupacionais
                e gestão compliance com normas regulamentadoras (NRs).
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                <strong>Resultado comprovado:</strong> empresas que nos escolhem
                têm aumento de produtividade e redução de custos com
                afastamentos. Garantimos segurança jurídica e qualidade de vida
                para seus colaboradores!
              </Typography>
            </Box>
          </Grid2>

          {!isMobile && (
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={aboutUs}
                alt="Sobre nossa empresa"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Grid2>
          )}
        </Grid2>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography variant="h6" color="primary" gutterBottom>
                Nossa expertise inclui:
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontWeight: 600 }}
                >
                  Elaboração de PGR e PCMSO
                </Typography>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontWeight: 600 }}
                >
                  Estruturação e suporte ao SESMT
                </Typography>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontWeight: 600 }}
                >
                  Treinamentos especializados
                </Typography>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontWeight: 600 }}
                >
                  Projetos e equipamentos para sistemas de sinalização e combate
                  a incêndio
                </Typography>
                <Typography
                  component="li"
                  variant="body1"
                  sx={{ fontWeight: 600 }}
                >
                  Consultoria em motivação, recrutamento e seleção de equipes
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography variant="h6" color="primary" gutterBottom>
                Por que escolher a Mais Prevenção?
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Estamos comprometidos em cuidar da saúde, segurança e bem-estar
                da sua equipe, entregando soluções que unem qualidade,
                eficiência e inovação.
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </AboutContainer>
  );
}
