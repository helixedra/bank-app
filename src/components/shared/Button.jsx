import "./Button.scss";
export default function Button({ children, action, style, width = "auto", icon = false, after = false }) {
  return (
    <button className={`button button_${style}`} style={{ width: `${width}` }} onClick={action}>
      {icon && <span className="button_icon">{icon}</span>}
      <span className="button_text">{children}</span>
      {after && <span className="button_after">{after}</span>}
    </button>
  );
}
