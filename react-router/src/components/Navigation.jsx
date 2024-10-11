import { NavLink } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <li>
            <NavLink className="nav-link" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={"/products"}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
