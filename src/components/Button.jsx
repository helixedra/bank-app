import classes from "./Button.module.scss";
export default function Button({
  size = "l",
  type = "primary",
  icon,
  children,
  iconButton = false,
  action = null,
}) {
  return (
    <button
      onClick={action}
      className={`${classes.button} ${classes[size]} ${classes[type]}`}
    >
      {iconButton ? (
        <span className={classes.icon_button}>{icon}</span>
      ) : (
        icon && <span className={classes.icon}>{icon}</span>
      )}
      {children}
    </button>
  );
}
