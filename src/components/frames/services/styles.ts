import styled from "styled-components";
import { defaultTheme } from "../../../styles/default";

export const ServicesContainer = styled.div`
  min-height: 100vh; // Garante que o container ocupe pelo menos a altura total da 
  width: 100%;
  padding: 2rem;
  background-color: ${defaultTheme["green-500"]};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden; // Garante que o conteúdo não saia do container

  @media (max-width: 640px) {
    padding: 1rem; // Adiciona padding de 1rem em dispositivos menores
  }
`;
