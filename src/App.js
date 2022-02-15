import { useState } from "react";
import Battle from "./Components/Battle";
import Popular from "./Components/Popular";
import ThemeContext from "./Contexts/theme";
import Nav from "./Components/Nav";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        <div className="container">
          <Nav />
          <Battle />
          {/* <Popular /> */}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
