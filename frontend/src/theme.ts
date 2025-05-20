import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: { main: '#00796B', contrastText: '#FFFFFF' },
    secondary: { main: '#FF7043', contrastText: '#FFFFFF' },
    background: { default: '#F5F5F5', paper: '#FFFFFF' },
    neutral: { main: '#64748B', contrastText: '#FFFFFF' },
  },
  typography: { h4: { fontWeight: 600, letterSpacing: '0.5px' }, body1: { color: '#333333' } },
});

export default theme;
