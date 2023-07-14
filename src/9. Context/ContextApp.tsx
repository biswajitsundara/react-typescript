import { ThemeProvider } from "./ThemeContext";
import UseContextExample from "./UseContextExample";


function ContextApp() {
  return (
    <>
      <ThemeProvider>
        <UseContextExample />
      </ThemeProvider>
    </>
  );
}

export default ContextApp;