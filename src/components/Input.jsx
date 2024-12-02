import classes from "./Input.module.scss";
export default function Input({ type = "text", name = "input", size = "l", value, handler, label = false, placeholder = null }) {
  return (
    <>
      {label && <div className={classes.label}>{label}</div>}
      <input className={`${classes.input} ${classes[size]}`} type={type} onChange={(e) => handler(e.target.value, name)} value={value} placeholder={placeholder && placeholder} />
    </>
  );
}
