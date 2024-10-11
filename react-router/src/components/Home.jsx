import { NavLink, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>

      <NavLink to={"/products"}>
        <button>Go to Product Page</button>
      </NavLink>

      {/* <button onClick={() => navigate("/products")}>Go to Product Page</button> */}
    </div>
  );
}
