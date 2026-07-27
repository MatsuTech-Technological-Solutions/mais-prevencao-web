import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "PGR & GRO",
    description: "Programa de Gerenciamento de Riscos (NR-01)",
    details:
      "Elaboração, implementação e revisão do PGR e Inventário de Riscos Ocupacionais, atendendo a NR 1 e integrando com o eSocial.",
  },
  {
    title: "Análises de Risco (APR / AST / PT)",
    description: "Análise Preliminar de Risco e Permissão de Trabalho",
    details:
      "Elaboração de APR (Análise Preliminar de Risco), AST (Análise Segura da Tarefa) e procedimentos de Permissão de Trabalho (PT) para tarefas críticas.",
  },
  {
    title: "Planos de Emergência",
    description: "Planos de Atendimento e Abandono de Área",
    details:
      "Desenvolvimento de Plano de Resposta a Emergências (PRE), Plano de Atendimento a Emergências (PAE) e rotas de fuga com simulações periódicas.",
  },
  {
    title: "Investigação & Auditorias SST",
    description: "Investigação de Acidentes e Auditorias Legais",
    details:
      "Metodologia para investigação de causas de acidentes e incidentes, auditorias de conformidade legal de NRs e auditoria comportamental.",
  },
  {
    title: "Gestão de Contratadas",
    description: "Controle de Terceiros e Documentação Legal",
    details:
      "Gestão completa da documentação de empresas contratadas e terceirizadas, reduzindo riscos de corresponsabilidade trabalhista e acidentes.",
  },
];

export function SafetyManagement() {
  return (
    <ServiceTabs
      accentColor={defaultTheme["orange-500"]}
      services={subServices}
    />
  );
}
