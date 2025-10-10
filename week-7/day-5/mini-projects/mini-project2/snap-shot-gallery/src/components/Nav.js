import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css"; // correcte syntaxe d’import

export default function Nav() {
  const location = useLocation();

  const links = [
    { name: "Mountain", path: "/" },
    { name: "Beaches", path: "/beaches" },
    { name: "Birds", path: "/birds" },
    { name: "Food", path: "/food" },
  ];

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
