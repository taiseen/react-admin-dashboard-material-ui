
import { CssBaseline, ThemeProvider } from '@mui/material'; // reset all default css
import { ColorModeContext, useMode } from './styles/theme';

const App = () => {

  const [theme, coloMode] = useMode();

  return (
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className="app">
          <div className="content"></div>
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App