import styled, { createGlobalStyle } from "styled-components";

interface ContainerProps {
  h1Color?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;

  @media (min-width: 640px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 4rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ h1Color, theme }) => h1Color || theme.whiteGhost};
    padding-bottom: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;

  @media (min-width: 640px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem;
  }
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
    font-display: swap;
  }

  :root {
    font-family: 'Montserrat', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif !important;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 735px) {
      font-size: 87.5%;
    }
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }

  small {
    font-size: 0.875rem;
  }

  
`;
