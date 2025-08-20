import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My Dressing Website!</h1>
      <p>Explore and dress your doll!</p>
      <Link to="/dressing">
        <button className="menu-btn">Go to Dressing</button>
      </Link>
    </div>
  );
}
