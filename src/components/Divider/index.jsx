import React from "react";
import "./index.scss";

function Divider({
  className,
  children,
  layout = "horizontal",
  position = "center",
  ...rest
}) {
  return layout === "vertical" ? (
    ""
  ) : (
    <div
      {...rest}
      className={`${className} w-full text-${position} border-b border-gray-400 m-4`}
      style={{ lineHeight: "0.1em" }}
    >
      <span className="bg-white px-2">{children}</span>
    </div>
  );
}

export default Divider;
