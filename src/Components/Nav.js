import ThemeContext from "../Contexts/theme";

const Nav = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <nav className="row space-between">
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
