import "./Button.scss";
export default function Button({ children, action, style, width = "auto" }) {
  return (
    <button className={`button button_${style}`} style={{ width: `${width}` }} onClick={action}>
      {children}
    </button>
  );
}
