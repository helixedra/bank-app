import "./SearchInput.scss";
import "./Input.scss";

export default function Input({ name = "input", value, handler, label = false, placeholder = null, icon = null }) {
  return (
    <>
      {label && <div className="label">{label}</div>}
      <div className="search_container">
        <span className="search_icon">{icon}</span>
        <input type="search" className="input search" onChange={(e) => handler(e.target.value, name)} value={value} placeholder={placeholder && placeholder} />
      </div>
    </>
  );
}
