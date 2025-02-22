import { CssBaseline } from "@mui/material";
import "./App.css";
import AppRouter from "./AppRouter";
import { HashRouter } from "react-router-dom";
import ThemeProvider from "@providers/ThemeProvider";
import ErrorBoundary from "@components/ErrorHandling";
import ScrollToTop from "@components/ScrollToTop";

function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <ScrollToTop />
        <ThemeProvider>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
