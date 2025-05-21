import styled from "styled-components";
import { defaultTheme } from "../../../styles/default";


export const FooterContainer = styled('footer')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-color: ${defaultTheme.whiteGhost};
  padding: 4rem;
  
  form {
    flex: 1;
  }
`;
