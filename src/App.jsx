
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './styles/theme';

const App = () => {

  const [theme, coloMode] = useMode();

  return (
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className="app">App</main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App