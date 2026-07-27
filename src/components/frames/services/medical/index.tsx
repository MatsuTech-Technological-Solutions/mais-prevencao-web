import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "PCMSO & eSocial",
    description: "Programa de Controle Médico e eSocial SST",
    details:
      "Elaboração e acompanhamento do PCMSO conforme a NR 7, exames médicos obrigatórios e envio dos eventos de SST no eSocial (S-2210, S-2220 e S-2240).",
  },
  {
    title: "Exames Ocupacionais",
    description: "Avaliações Médicas Clínicas e Complementares",
    details:
      "Realização de exames admissionais, periódicos, demissionais, de retorno ao trabalho e mudança de riscos ocupacionais na clínica própria ou in company.",
  },
  {
    title: "Ergonomia (AET - NR-17)",
    description: "Análise Ergonômica e Riscos Psicossociais",
    details:
      "Análise Ergonômica do Trabalho (AET), avaliação simplificada, adequação de postos de trabalho e diagnósticos de riscos psicossociais conforme a NR 1.",
  },
  {
    title: "Acompanhamento e Retorno",
    description: "Monitoramento de Afastados e Reabilitação",
    details:
      "Monitoramento de colaboradores afastados, parecer de aptidão física e mental e programas de reabilitação ocupacional graduada.",
  },
  {
    title: "Campanhas de Saúde & Absenteísmo",
    description: "Promoção do Bem-Estar e Controle de Doenças",
    details:
      "Campanhas preventivas, programas de saúde mental e controle estatístico de absenteísmo para redução de sinistralidade e sinistros trabalhistas.",
  },
];

export function Medical() {
  return (
    <ServiceTabs accentColor={defaultTheme["green-300"]} services={subServices} />
  );
}

