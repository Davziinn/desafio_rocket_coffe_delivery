import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { defaultTheme } from './styles/theme/default';
import { CartProvider } from './context/CartContext';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
          <GlobalStyle />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}