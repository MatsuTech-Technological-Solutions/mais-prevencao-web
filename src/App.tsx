import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme/theme';
import { AppRouter } from "./AppRouter";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
      <GlobalStyle />
    </ThemeProvider>
  );
}

