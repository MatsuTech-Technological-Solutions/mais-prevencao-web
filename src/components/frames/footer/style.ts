import styled from "styled-components";
import { defaultTheme } from "../../../styles/default";


export const FooterContainer = styled('footer')`
  display: flex;
  flex-direction: column;
  background:
    linear-gradient(180deg, ${defaultTheme.whiteGhost} 0%, ${defaultTheme["blue-100"]} 100%);
  padding: 5rem 0 0;
  overflow: hidden;
  
  form {
    width: 100%;
  }

  @media (max-width: 640px) {
    padding-top: 3rem;
  }
`;
