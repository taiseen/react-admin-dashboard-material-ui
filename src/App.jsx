import { CssBaseline, ThemeProvider } from '@mui/material'; // reset all default css
import { ColorModeContext, useMode } from './styles/theme';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./pages/global/Sidebar";
// import Dashboard from "./pages/dashboard";
// import Team from "./pages/team";
// import Invoices from "./pages/invoices";
// import Contacts from "./pages/contacts";
// import Bar from "./pages/bar";
// import Form from "./pages/form";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import FAQ from "./pages/faq";
// import Geography from "./pages/geography";
// import Calendar from "./pages/calendar/calendar";
import Topbar from './pages/global/Topbar';

const App = () => {

  const [theme, coloMode] = useMode();

  return (
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        {/* Rest CSS */}
        <CssBaseline />

        <main className="app">

          <Sidebar />

          <div className="content">
            <Topbar />

            <Routes>
              {/* <Route path="" elements={<Dashboard />} /> */}
            </Routes>

          </div>

        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App