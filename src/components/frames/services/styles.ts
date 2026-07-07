import styled from "styled-components";
import { defaultTheme } from "../../../styles/default";

export const ServicesContainer = styled.div`
  width: 100%;
  padding: 5rem 0;
  background:
    linear-gradient(135deg, rgba(11, 39, 66, 0.96), rgba(18, 61, 102, 0.96)),
    ${defaultTheme["blue-700"]};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 640px) {
    padding: 3rem 0;
  }
`;
