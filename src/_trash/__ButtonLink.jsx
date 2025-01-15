import classes from "./Button.module.scss";
import { Link } from "react-router-dom";
export default function Button({ size = "l", type = "primary", icon, children, iconButton = false, to = null, after = null }) {
  return (
    <Link to={to} className={`${classes.button} ${classes[size]} ${classes[type]}`}>
      {iconButton ? <span className={classes.icon_button}>{icon}</span> : icon && <span className={classes.icon}>{icon}</span>}
      {children}
      {after && <span className={classes.after}>{after}</span>}
    </Link>
  );
}
