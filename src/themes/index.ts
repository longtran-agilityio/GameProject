import { createTheme } from '@mui/material'
import typography from './typography'
export const theme = createTheme({
  palette: {
    text: {
      primary: '#fff',
      secondary: '#ccc',
    },
    background: {
      default: '#0f1011',
      paper: '#262626',
    },
    primary: {
      main: '#999',
      dark: '#1a1a1a',
    },
    secondary: {
      main: '#ac34e9',
    },
    action: {
      disabled: '#90ee90',
    },
    error: {
      main: '#d32f2f',
    },
  },
  spacing: 10,
  typography,
})
