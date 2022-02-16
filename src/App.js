import react, { useState } from "react";
import ThemeContext from "./Contexts/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./Components/Nav";
import Loading from "./Components/Loading";

const Popular = react.lazy(() => import("./Components/Popular"));
const Battle = react.lazy(() => import("./Components/Battle"));

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme}>
          <div className="container">
            <Nav />
            <react.Suspense fallback={<Loading />}>
              <Routes>
                <Route exact path="/Github-Battle" element={<Popular />} />
                <Route path="/battle" element={<Battle />} />
              </Routes>
            </react.Suspense>
          </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
