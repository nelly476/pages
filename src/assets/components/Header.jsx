import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/" className="header--name">
          AYDAR NURIEV
        </Link>
      </h1>
      <ul className="header--left">
        <li>
          <Link to="">About me</Link>
        </li>
        <li>
          <Link to="">Projects</Link>
        </li>
        <ul className="header--connect--button">
          <Link to="">Let's connect</Link>
        </ul>
      </ul>
    </div>
  );
}
