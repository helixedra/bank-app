import { RiArrowDropDownLine } from "@remixicon/react";
import "./Button.scss";
import "./Dropdown.scss";

export default function Dropdown({ style = "additional", options = { data: [], visibility: false }, arrow = true, icon, iconButton = false, toggle, listHeight = null, label = null, align = "center", width = "auto" }) {
  const currentValue = options.data?.find((option) => option.active);
  const listItems = options.data?.map((item) => <DropdownItem {...item} key={item.id} />);

  const alignList = {
    left: "align_left",
    right: "align_right",
    center: "align_center",
  };

  return (
    <div className="dropdown_container" style={width ? { width: `${width}` } : undefined}>
      <div className={options.visibility ? `backdrop` : `hidden`} onClick={toggle}></div>
      <div className="dropdown">
        {label && <div className="dropdown__label">{label}</div>}
        <DropdownButton style={style} state={options.visibility} toggle={toggle} icon={icon} iconButton={iconButton} before={currentValue?.before} after={currentValue?.after} arrow={arrow} width={width}>
          {iconButton ? icon : currentValue?.name}
        </DropdownButton>
        <div className={options.visibility ? `dropdown__list dropdown__list__${alignList[align]}` : `dropdown__list dropdown__list__${alignList[align]} hidden`}>
          <div className={`${style}`} style={listHeight ? { height: `${listHeight}px` } : undefined}>
            {listItems}
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownButton({ style, icon, children, iconButton, arrow, state, toggle, before, after, width }) {
  return (
    <button onClick={toggle} className={`button button_${style}`} style={{ width: `${width}` }}>
      {iconButton ? (
        <span className="icon_button">{icon}</span>
      ) : (
        <>
          {before && <span className="dropdown__before">{before}</span>}
          <span className="dropdown__value">{children}</span>

          {after && <span>{after}</span>}
        </>
      )}

      {arrow ? (
        state ? (
          <span className="dropdown__arrow_up">
            <RiArrowDropDownLine />
          </span>
        ) : (
          <span className="dropdown__arrow_down">
            <RiArrowDropDownLine />
          </span>
        )
      ) : null}
    </button>
  );
}

function DropdownItem({ name, action, before, after, border = false }) {
  return (
    <>
      <button className="dropdown__list_item" onClick={action}>
        <span className="dropdown__list_item__before">{before}</span>
        <span className="dropdown__list_item__text">{name}</span>
        <span className="dropdown__list_item__after">{after}</span>
      </button>
      {border && <div className="dropdown__list_item__border"></div>}
    </>
  );
}
