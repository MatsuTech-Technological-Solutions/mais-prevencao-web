import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "Brigada de Incêndio",
    description: "Treinamento, Formação e Reciclagem (NR-23)",
    details:
      "Formação de brigadistas conforme a NR 23 e Instruções Técnicas, com aulas práticas de combate a incêndio, suporte básico e evacuação.",
  },
  {
    title: "Projetos PPCI e AVCB",
    description: "Plano de Prevenção e Proteção Contra Incêndios",
    details:
      "Desenvolvimento de projetos de PPCI/AVCB, sistemas de alarme e detecção de fumaça, hidrantes, sprinklers, iluminação e sinalização de emergência.",
  },
  {
    title: "Primeiros Socorros & LOTO",
    description: "Suporte Básico e Bloqueio de Energias",
    details:
      "Treinamentos práticos de primeiros socorros emergenciais e implantação do programa LOTO (Lockout/Tagout - Bloqueio e Etiquetagem de Energias Perigosas).",
  },
  {
    title: "Simulados e Emergência",
    description: "Planos de Atendimento e Abandono de Área",
    details:
      "Elaboração de Planos de Resposta a Emergências (PRE), rotas de fuga e testes simulados periódicos para abandono de edificações.",
  },
  {
    title: "Produtos Perigosos (NR-20)",
    description: "Gestão de Inflamáveis e Combustíveis",
    details:
      "Prontuários e adequação de instalações conforme a NR 20, garantindo a segurança no armazenamento, transvasamento e manuseio de inflamáveis.",
  },
];

export function FireFighting() {
  return (
    <ServiceTabs accentColor={defaultTheme["red-500"]} services={subServices} />
  );
}

