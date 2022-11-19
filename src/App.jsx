import { CssBaseline, ThemeProvider } from '@mui/material'; // reset all default css
import { ColorModeContext, useMode } from './styles/theme';
import { Dashboard, SideMenu, Topbar } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  const [theme, coloMode] = useMode();

  return (
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        {/* Rest CSS */}
        <CssBaseline />

        <BrowserRouter>
          <main className="app">

            <SideMenu />

            <section className="content">
              <Topbar />

              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>

            </section>

          </main>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App