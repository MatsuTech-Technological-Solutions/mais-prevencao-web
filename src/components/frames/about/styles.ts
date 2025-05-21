import styled from "styled-components";
import { defaultTheme } from "../../../styles/default";

export const AboutContainer = styled.div`
  min-height: 100vh; 
  width: 100%;
  padding-top: 4rem;
  background-color: ${defaultTheme.whiteGhost};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden; 

  padding-bottom: 2rem;

  @media (max-width: 640px) {
    padding: 1rem; 
  }
`;
