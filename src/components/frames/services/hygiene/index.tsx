import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "Avaliação de Ruído",
    description: "Dosimetria e Ruído Ocupacional",
    details:
      "Avaliação de ruído contínuo, intermitente e de impacto, com dosimetria de ruído conforme NHO 01 da FUNDACENTRO e NR 15.",
  },
  {
    title: "Avaliação de Calor",
    description: "Sobrecarga Térmica (IBUTG)",
    details:
      "Avaliação quantitativa da exposição ocupacional ao calor através do índice IBUTG para ambientes internos e externos com carga solar.",
  },
  {
    title: "Vibração Ocupacional",
    description: "Vibração de Mãos/Braços (VMB) e Corpo Inteiro (VBN)",
    details:
      "Medições e avaliações de aceleração e vibração ocupacional conforme NHO 09 e NHO 10 para prevenção de doenças vasculares e osteomusculares.",
  },
  {
    title: "Agentes Químicos e Poeiras",
    description: "Amostragem de Vapores, Fumos e Poeiras",
    details:
      "Coleta e amostragem de vapores orgânicos, fumos metálicos, poeira respirável/inhalável e névoas para análise em laboratório credenciado.",
  },
  {
    title: "Iluminância e Biológicos",
    description: "Níveis de Iluminação e Riscos Biológicos",
    details:
      "Medição de níveis de iluminação no posto de trabalho (NHO 11) e avaliação de agentes biológicos como vírus, bactérias e fungos.",
  },
];

export function Hygiene() {
  return (
    <ServiceTabs
      accentColor={defaultTheme["blue-300"]}
      services={subServices}
    />
  );
}
