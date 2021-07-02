import React from "react";
import "./index.scss";

function Toggle(props) {
  const {
    children,
    className,
    label,
    width = "60px",
    height = "34px",
    checked = false,
    type = "round",
    ...rest
  } = props;

  return (
    <label
      className={`${className} switch`}
      style={{ width: width, height: height }}
    >
      <input type="checkbox" />
      <span className={`slider ${type}`}></span>
    </label>
  );
}

export default Toggle;
