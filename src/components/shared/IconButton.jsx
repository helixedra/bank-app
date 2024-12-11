export default function IconButton({ icon, style, text = false, action }) {
  return (
    <button className="icon_button" onClick={action}>
      <span className={`icon_button_icon button_${style}`}>{icon}</span>
      <span className="icon_button_text">{text}</span>
    </button>
  );
}
