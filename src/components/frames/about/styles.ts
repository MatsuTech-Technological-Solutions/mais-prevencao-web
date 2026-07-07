import styled from "styled-components";
import { defaultTheme } from "../../../styles/default";

export const AboutContainer = styled.div`
  width: 100%;
  padding: 5rem 0;
  background-color: ${defaultTheme.whiteGhost};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 640px) {
    padding: 3rem 0;
  }
`;
