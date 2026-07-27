import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "Classificação de Áreas",
    description: "Atmosferas Explosivas (ABNT NBR IEC 60079)",
    details:
      "Mapeamento e classificação de áreas com risco de explosão por gases, vapores ou poeiras combustíveis, garantindo a conformidade e segurança da instalação.",
  },
  {
    title: "Laudo NR-12",
    description: "Segurança em Máquinas e Equipamentos",
    details:
      "Apreciação de riscos, laudos técnicos, inventário e manuais de máquinas e equipamentos para adequação aos requisitos da NR 12.",
  },
  {
    title: "Inspeção NR-13",
    description: "Vasos de Pressão, Caldeiras e Tubulações",
    details:
      "Inspeções de segurança inicial, periódica e extraordinária em vasos de pressão, caldeiras, tubulações e tanques metálicos conforme a NR 13.",
  },
  {
    title: "SPDA e Elétrica (NR-10)",
    description: "Laudo de Para-raios, Aterramento e PIE",
    details:
      "Laudo de SPDA (ABNT NBR 5419), medição de aterramento elétrico, prontuário das instalações elétricas (PIE) e termografia em painéis elétricos.",
  },
  {
    title: "Gestão de SST em Obras",
    description: "Engenharia e Segurança para Construção Civil (NR-18)",
    details:
      "Coordenação de SST em obras, elaboração do PGR da obra, inspeções de campo, fiscalização técnica e liberação de frentes de trabalho.",
  },
  {
    title: "Higiene Ocupacional",
    description: "Avaliações Quantitativas Ambientais",
    details:
      "Dosimetria de ruído (NHO 01), avaliação de calor IBUTG (NHO 06), vibração ocupacional (VMB/VBN), luminância, agentes químicos, poeiras e biológicos.",
  },
  {
    title: "Inspeção de Porta-Pallets",
    description: "Laudo Estrutural de Armazenagem",
    details:
      "Inspeção técnica e emissão de laudo estrutural para sistemas de armazenagem porta-pallets, prevenindo colapsos e garantindo a segurança operacional.",
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


