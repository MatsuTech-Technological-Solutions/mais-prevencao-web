import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "Análise Ergonômica (AET)",
    description: "Análise Ergonômica do Trabalho (NR-17)",
    details:
      "Mapeamento biomecânico, cognitivo e organizacional das atividades de trabalho, emitindo laudo conclusivo e plano de ação segundo a NR 17.",
  },
  {
    title: "Avaliação Ergonômica Simplificada",
    description: "Triagem Rápida de Riscos Ergonômicos",
    details:
      "Avaliação ágil para identificação e classificação preliminar de perigos ergonômicos em postos de trabalho para atendimento ao PGR.",
  },
  {
    title: "Adequação de Postos",
    description: "Projetos de Redesenho Ergonômico",
    details:
      "Projetos e recomendações técnicas para adequação dimensional de mobília, bancadas, ferramentas, iluminação e organização das tarefas.",
  },
  {
    title: "Laudo & Programa de Ergonomia",
    description: "Comitê e Gestão Ergonômica Continuada",
    details:
      "Implantação de Comitê de Ergonomia (COERGO), ginástica laboral preventivas e monitoramento contínuo da saúde osteomuscular.",
  },
  {
    title: "Riscos Psicossociais",
    description: "Avaliação dos Fatores Psicossociais no Trabalho",
    details:
      "Diagnóstico e estratégias de prevenção do estresse, burnout e sobrecarga mental, alinhado com as diretrizes atualizadas da NR 1.",
  },
];

export function Ergonomics() {
  return (
    <ServiceTabs
      accentColor={defaultTheme["green-500"]}
      services={subServices}
    />
  );
}
