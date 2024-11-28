//Segment.jsx
import classes from "./Segment.module.scss";
export default function Segment({ buttons, size, type, handler }) {
  const buttonsArray =
    buttons &&
    buttons.map((button) => {
      return (
        <button
          className={`
            ${classes[size]} 
            ${
              button.active
                ? `${classes.segment_button} ${classes.active}`
                : classes.segment_button
            }
          `}
          key={button.id}
          onClick={(e) => handler(e, button.id)}
        >
          {button.icon && <span className={classes.icon}>{button.icon}</span>}
          {button.name}
        </button>
      );
    });

  return (
    <div className={`${classes.segment} ${classes[type]}`}>{buttonsArray}</div>
  );
}
