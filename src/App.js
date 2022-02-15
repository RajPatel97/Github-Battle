import { useState } from "react";
import Battle from "./Components/Battle";
import Popular from "./Components/Popular";
import ThemeContext from "./Contexts/theme";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme}>
          <div className="container">
            <Nav />
            <Routes>
              <Route exact path="/" element={<Popular />}>
                {/* <Popular /> */}
              </Route>
              <Route path="/battle" element={<Battle />}>
                {/* <Battle /> */}
              </Route>
            </Routes>
          </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
