import classes from "./Button.module.scss";
export default function Button({ size, type, icon, children }) {
  return (
    <button className={`${classes.button} ${classes[size]} ${classes[type]}`}>
      {icon && <span className={classes.icon}>{icon}</span>}
      {children}
    </button>
  );
}
