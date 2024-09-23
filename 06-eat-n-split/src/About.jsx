import { useNavigate, useParams } from "react-router-dom";

export default function About() {
  const { id, contact } = useParams();

  const navigate = useNavigate();

  return (
    <>
      <h1>About Us</h1>

      <label>ID</label>
      <h2>{id}</h2>

      <label>Contact</label>
      <h2>{contact}</h2>

      <button className="button" onClick={() => navigate("/")}>
        Go to main '/' page
      </button>
    </>
  );
}
