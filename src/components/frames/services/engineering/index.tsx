import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

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
      "Emissão de LTCAT, avaliações de insalubridade e periculosidade conforme as NRs 15 e 16.",
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
      "Capacitação para equipes sobre práticas seguras, uso correto de EPIs e conformidade com as normas regulamentadoras.",
  },
];

export function Engineering() {
  return (
    <ServiceTabs
      accentColor={defaultTheme["orange-400"]}
      services={subServices}
    />
  );
}
