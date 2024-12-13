import "./Input.scss";
export default function Input({ type = "text", name = "input", value, handler, label = false, placeholder = null }) {
  return (
    <>
      {label && <div className="label">{label}</div>}
      <input className={`input`} type={type} onChange={(e) => handler(e.target.value, name)} value={value} placeholder={placeholder && placeholder} />
    </>
  );
}
