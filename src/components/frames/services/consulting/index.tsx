import { ServiceTabs } from "../ServiceTabs";
import { defaultTheme } from "../../../../styles/default";

const subServices = [
  {
    title: "Sistemas de Gestão ISO",
    description: "Implantação ISO 45001 e ISO 14001",
    details:
      "Consultoria completa para estruturação, documentação e auditoria de sistemas de gestão de Saúde e Segurança Ocupacional (ISO 45001) e Meio Ambiente (ISO 14001).",
  },
  {
    title: "Auditorias & Due Diligence",
    description: "Auditorias Internas e Passivos Trabalhistas",
    details:
      "Auditorias independentes para verificação de conformidade normativa, avaliação de passivos trabalhistas em SST e due diligence para fusões e aquisições.",
  },
  {
    title: "Gestão Digital & eSocial",
    description: "Eventos S-2210, S-2220 e S-2240",
    details:
      "Envio e gestão integrada dos eventos de SST no eSocial, garantindo o cumprimento de prazos fiscais e consistência das informações com o laudo LTCAT.",
  },
  {
    title: "KPIs e ESG em Segurança",
    description: "Métricas de Desempenho e Sustentabilidade",
    details:
      "Desenvolvimento de painéis de indicadores de desempenho (KPIs) de prevenção e implementação da pauta ESG com foco na saúde e bem-estar dos trabalhadores.",
  },
];

export function Consulting() {
  return (
    <ServiceTabs
      accentColor={defaultTheme["blue-700"]}
      services={subServices}
    />
  );
}
