import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "SST em Obras (NR-18)",
    description: "Coordenação e Gestão de Segurança no Canteiro",
    details:
      "Acompanhamento técnico presencial, coordenação de equipes e implementação do PGR da Obra conforme as especificações da NR 18.",
  },
  {
    title: "Fiscalização e Liberação",
    description: "Liberação de Frentes de Trabalho",
    details:
      "Inspeção técnica para autorização e liberação segura de trabalhos em altura, escavações, demolições e instalações temporárias.",
  },
  {
    title: "Auditorias de Campo",
    description: "Inspeções e Auditorias Periódicas",
    details:
      "Auditorias de campo em canteiros de obra para verificação do uso de EPIs/EPCs, instalações elétricas provisórias e proteção contra quedas.",
  },
  {
    title: "Gestão de Empreiteiras",
    description: "Controle de Terceiros no Canteiro",
    details:
      "Auditoria de documentação legal, treinamentos obrigatórios e fichas de EPI de todos os prestadores e subempreiteiros da obra.",
  },
];

export function Construction() {
  return (
    <ServiceTabs
      accentColor={defaultTheme["yellow-500"]}
      services={subServices}
    />
  );
}
