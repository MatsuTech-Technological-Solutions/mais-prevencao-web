import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "PGR, GRO e Análises de Risco",
    description: "Gestão de Riscos e Permissões de Trabalho",
    details:
      "Elaboração e acompanhamento do PGR, APR (Análise Preliminar de Risco), AST e procedimentos de Permissão de Trabalho (PT) para tarefas críticas.",
  },
  {
    title: "Treinamentos das NRs",
    description: "Capacitação Normativa e Operacional",
    details:
      "Treinamentos presenciais e in company para NR-01, NR-05 (CIPA), NR-06 (EPI), NR-10, NR-11, NR-12, NR-18, NR-20, NR-33, NR-35, Direção Defensiva e Operação de Máquinas.",
  },
  {
    title: "Gestão de Contratadas",
    description: "Auditoria Documental de Terceiros",
    details:
      "Auditoria contínua da documentação legal e treinamentos de empreiteiras e prestadores terceirizados, prevenindo passivos trabalhistas.",
  },
  {
    title: "Meio Ambiente (PGRS)",
    description: "Gerenciamento de Resíduos e Licenciamento",
    details:
      "Elaboração do PGRS (Gerenciamento de Resíduos Sólidos), inventários, licenças ambientais, plano de emergência e auditorias ambientais.",
  },
  {
    title: "Consultoria ISO & ESG",
    description: "Implantação ISO 45001 e ISO 14001",
    details:
      "Consultoria para estruturação de Sistemas de Gestão de Saúde, Segurança e Meio Ambiente, auditorias internas, KPIs e ESG aplicado à segurança.",
  },
];

export function Development() {
  return (
    <ServiceTabs
      accentColor={defaultTheme["yellow-400"]}
      services={subServices}
    />
  );
}

