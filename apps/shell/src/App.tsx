import { ThemeProvider } from "./providers/ThemeProvider";
import ToastGlobal from "./shared/components/ToastGlobal";
import { AppRouter } from "./shared/router/AppRouter";

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
      <ToastGlobal />
    </ThemeProvider>
  );
}

export default App;
