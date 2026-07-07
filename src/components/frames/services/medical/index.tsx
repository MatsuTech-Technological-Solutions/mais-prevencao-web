import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "PCMSO",
    description: "Programa de Controle Médico de Saúde Ocupacional",
    details:
      "Elaboração e acompanhamento do PCMSO conforme a NR 7, garantindo a realização dos exames médicos obrigatórios.",
  },
  {
    title: "Exames Ocupacionais",
    description: "Avaliações Médicas Completas",
    details:
      "Realização de exames admissionais, periódicos, de retorno ao trabalho, mudança de função e demissionais, conforme as necessidades da empresa.",
  },
  {
    title: "Acompanhamento e Retorno",
    description: "Monitoramento de Afastamentos",
    details:
      "Monitoramento da saúde dos colaboradores e elaboração de programas de reabilitação ocupacional.",
  },
  {
    title: "Campanhas de Saúde",
    description: "Promoção do Bem-Estar",
    details:
      "Promoção de ações preventivas como vacinação, palestras e programas de qualidade de vida para reduzir afastamentos e melhorar a produtividade.",
  },
  {
    title: "Gestão de Absenteísmo",
    description: "Controle e Prevenção",
    details:
      "Controle de doenças ocupacionais e avaliação de medidas para reduzir impactos na produtividade da empresa.",
  },
];

export function Medical() {
  return (
    <ServiceTabs accentColor={defaultTheme["green-300"]} services={subServices} />
  );
}
