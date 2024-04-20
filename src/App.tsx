import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./muiTheme";
import { ResolutionProvider } from "./features/common/hooks/useResolution";
import MainRouter from "./features/common/components/MainRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ResolutionProvider>
          <MainRouter />
        </ResolutionProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
