import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "Gestão de Resíduos (PGRS)",
    description: "Plano de Gerenciamento de Resíduos Sólidos",
    details:
      "Elaboração e implementação do PGRS com classificação, segregação, acondicionamento, transporte e destinação final ambientalmente adequada.",
  },
  {
    title: "Inventário de Resíduos",
    description: "Controle e Relatório Anual de Resíduos",
    details:
      "Mapeamento quantitativo e qualitativo dos resíduos industriais e comerciais para declaração nos órgãos ambientais reguladores.",
  },
  {
    title: "Licenciamento Ambiental",
    description: "LP, LI, LO e Regularização Ambiental",
    details:
      "Assessoria técnica para obtenção e renovação de Licença Prévia (LP), Licença de Instalação (LI) e Licença de Operação (LO) junto aos órgãos competentes.",
  },
  {
    title: "Plano de Emergência Ambiental",
    description: "Prevenção a Vazamentos e Contaminações",
    details:
      "Procedimentos para contenção e resposta rápida a incidentes de contaminação do solo, ar e recursos hídricos.",
  },
  {
    title: "Aspectos e Impactos Ambientais",
    description: "Matriz de Avaliação e Auditorias Ambientais",
    details:
      "Levantamento da Matriz de Aspectos e Impactos Ambientais (MAIA) e auditorias de conformidade com a legislação ambiental.",
  },
];

export function Environment() {
  return (
    <ServiceTabs
      accentColor={defaultTheme["green-700"]}
      services={subServices}
    />
  );
}
