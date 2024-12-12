import "./Button.scss";
import { Link } from "react-router-dom";
export default function Button({ children, link, style, width = "auto" }) {
  return (
    <Link to={link} className={`button button_${style}`} style={{ width: `${width}` }}>
      {children}
    </Link>
  );
}
