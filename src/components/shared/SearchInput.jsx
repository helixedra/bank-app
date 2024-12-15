import "./SearchInput.scss";
import "./Input.scss";
import { RiSearchLine } from "@remixicon/react";

export default function Input({ name = "input", value, handler, label = false, placeholder = null, className }) {
  return (
    <>
      {label && <div className="label">{label}</div>}
      <div className="search_container">
        <span className="search_icon">
          <RiSearchLine />
        </span>
        <input type="search" className={`input search ${className}`} onChange={(e) => handler(e.target.value, name)} value={value} placeholder={placeholder && placeholder} />
      </div>
    </>
  );
}
