import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {Array.from({ length: 3 }).map((e, i) => (
          <li>
            <Link to={`/products/${i + 1}`}>Product {i + 1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
