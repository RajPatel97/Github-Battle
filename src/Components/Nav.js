import ThemeContext from "../Contexts/theme";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "rgb(187, 46, 31)",
};

const Nav = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <nav className="row space-between">
          <ul className="row nav">
            <li>
              <NavLink
                to={"/Github-Battle"}
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/battle"}
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Battle
              </NavLink>
            </li>
          </ul>
          <button
            className="btn-clear"
            style={{ fontSize: 30 }}
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
          >
            {theme === "light" ? "🔦 " : "💡"}
          </button>
        </nav>
      )}
    </ThemeContext.Consumer>
  );
};

export default Nav;
