import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "Brigada de Incêndio",
    description: "Treinamento e Formação",
    details:
      "Formação de brigadistas conforme a NR 23, com técnicas de combate a incêndios, evacuação de emergência e uso de extintores.",
  },
  {
    title: "PPCI",
    description: "Plano de Prevenção e Proteção Contra Incêndios",
    details:
      "Desenvolvimento de planos de prevenção, incluindo instalação de alarmes, extintores e sistemas de combate a incêndios.",
  },
  {
    title: "Simulados de Evacuação",
    description: "Preparação para Emergências",
    details:
      "Testes práticos para preparar funcionários em casos de emergência, garantindo respostas rápidas e eficazes.",
  },
  {
    title: "Sinalização e Equipamentos",
    description: "Infraestrutura de Segurança",
    details:
      "Instalação de placas de sinalização, iluminação de emergência, extintores e hidrantes conforme as normas do Corpo de Bombeiros.",
  },
  {
    title: "Produtos Perigosos",
    description: "Gestão de Inflamáveis e Combustíveis",
    details:
      "Adequação de instalações conforme a NR 20, garantindo segurança no armazenamento e manuseio de substâncias perigosas.",
  },
];

export function FireFighting() {
  return (
    <ServiceTabs accentColor={defaultTheme["red-500"]} services={subServices} />
  );
}
