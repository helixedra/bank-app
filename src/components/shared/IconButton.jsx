export default function IconButton({ icon, className, style, text = false, action }) {
  return (
    <button className={`icon_button ${className}`} onClick={action}>
      <span className={`icon_button_icon button_${style}`}>{icon}</span>
      {text && <span className="icon_button_text">{text}</span>}
    </button>
  );
}
