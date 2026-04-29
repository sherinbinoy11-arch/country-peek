import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.className = theme;
  };

  return (
    <header className="header">
      <h2>CountryPeek</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>

      <button
        aria-label={
          theme === "light"
            ? "Switch to dark mode"
            : "Switch to light mode"
        }
        onClick={toggleTheme}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
}

export default Header;