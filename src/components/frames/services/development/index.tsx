import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "Auditorias e Inspeções",
    description: "Diagnóstico de Segurança",
    details:
      "Diagnóstico completo das condições de trabalho para garantir conformidade com a legislação vigente.",
  },
  {
    title: "Documentos Obrigatórios",
    description: "Conformidade Legal",
    details:
      "Desenvolvimento de PGR, PCMSO, LTCAT, PPP e outros relatórios técnicos necessários para evitar passivos trabalhistas.",
  },
  {
    title: "Treinamento e Capacitação",
    description: "Desenvolvimento Profissional",
    details:
      "Cursos presenciais e online para conscientizar colaboradores sobre segurança no ambiente de trabalho.",
  },
  {
    title: "Análise de Acidentes",
    description: "Prevenção e Investigação",
    details:
      "Identificação das causas de acidentes e elaboração de medidas preventivas para evitar novas ocorrências.",
  },
  {
    title: "Gestão de EPIs e EPCs",
    description: "Proteção e Segurança",
    details:
      "Acompanhamento do uso correto de Equipamentos de Proteção Individual e Coletiva, garantindo conformidade com as normas de segurança.",
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
