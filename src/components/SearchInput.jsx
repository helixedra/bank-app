import classes from "./SearchInput.module.scss";
export default function Input({ name = "input", size = "l", value, handler, label = false, placeholder = null, icon = null }) {
  return (
    <>
      {label && <div className={classes.label}>{label}</div>}
      <div className={classes.search_container}>
        <span className={classes.search_icon}>{icon}</span>
        <input className={`${classes.input} ${classes[size]}`} type="search" onChange={(e) => handler(e.target.value, name)} value={value} placeholder={placeholder && placeholder} />
      </div>
    </>
  );
}
