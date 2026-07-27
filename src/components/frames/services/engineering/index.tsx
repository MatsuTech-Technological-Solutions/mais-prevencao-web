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
      "Apreciação de riscos, laudos técnicos e inventário de máquinas e equipamentos para adequação completa aos requisitos da NR 12.",
  },
  {
    title: "Inspeção NR-13",
    description: "Vasos de Pressão, Caldeiras e Tubulações",
    details:
      "Inspeções de segurança inicial, periódica e extraordinária em vasos de pressão, caldeiras, tubulações e tanques de metálicos conforme a NR 13.",
  },
  {
    title: "Laudo de SPDA & Elétrica",
    description: "Sistema de Proteção contra Descargas Atmosféricas e NR-10",
    details:
      "Laudo de para-raios (SPDA), medição de aterramento elétrico, prontuário das instalações elétricas (PIE) e termografia em painéis elétricos.",
  },
  {
    title: "Projetos de Combate a Incêndio",
    description: "PPCI, AVCB e Sistemas de Proteção",
    details:
      "Elaboração de projetos de PPCI/AVCB, sistemas de detecção e alarme de incêndio, iluminação e sinalização de emergência, hidrantes e sprinklers.",
  },
  {
    title: "Inspeção de Porta-Pallets",
    description: "Segurança Estrutural em Sistemas de Armazenagem",
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

