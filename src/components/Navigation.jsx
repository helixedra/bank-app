import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav>
      <ul className="desktop_menu">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}
