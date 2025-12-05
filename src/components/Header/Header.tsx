import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "#sobre" },
    { name: "Serviços", path: "#servicos" },
    { name: "Depoimentos", path: "#depoimentos" },
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "#contato" },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      if (location.pathname !== "/") {
        window.location.href = "/" + path;
      } else {
        const element = document.querySelector(path);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="header-logo">
            Suprema Jurídica
          </Link>

          <div className="header-desktop-menu">
            {navItems.map((item) => (
              item.path.startsWith("#") ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className="header-link"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="header-link"
                >
                  {item.name}
                </Link>
              )
            ))}
            <button onClick={() => handleNavClick("#contato")} className="header-cta-button">
              Agendar Consulta
            </button>
          </div>

          <button
            className="header-mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="header-mobile-menu">
            <div className="header-mobile-links">
              {navItems.map((item) => (
                item.path.startsWith("#") ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className="header-mobile-link"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="header-mobile-link"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <button onClick={() => handleNavClick("#contato")} className="header-mobile-cta">
                Agendar Consulta
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
