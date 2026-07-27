import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "Treinamentos das NRs",
    description: "Formações Normativas Obrigatórias",
    details:
      "Treinamentos presenciais e in company para NR-01, NR-05 (CIPA), NR-06 (EPI), NR-10 (Elétrica), NR-11 (Transporte de Cargas), NR-12 (Máquinas), NR-18, NR-20, NR-23, NR-33 (Espaço Confinado) e NR-35 (Trabalho em Altura).",
  },
  {
    title: "Formação de Brigada",
    description: "Brigada de Incêndio (NR-23 e ITs)",
    details:
      "Treinamento teórico e prático de combate a incêndio, abandono de edificação e suporte básico de vida conforme normas estaduais e NR 23.",
  },
  {
    title: "Primeiros Socorros & LOTO",
    description: "Primeiros Socorros e Bloqueio/Etiquetagem",
    details:
      "Capacitação de equipes para atendimento emergencial de primeiros socorros e implantação do programa LOTO (Lockout/Tagout) para controle de energias perigosas.",
  },
  {
    title: "Direção Defensiva & Máquinas",
    description: "Operação Segura de Veículos e Equipamentos",
    details:
      "Treinamentos de direção defensiva para frotas e capacitação para operadores de empilhadeiras, pontes rolantes, plataformas elevatórias e escavadeiras.",
  },
];

export function Training() {
  return (
    <ServiceTabs
      accentColor={defaultTheme["red-600"]}
      services={subServices}
    />
  );
}
