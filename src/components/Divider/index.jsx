import React from "react";

function Divider({
  className,
  children,
  layout = "horizontal",
  position = "center",
  ...rest
}) {
  return (
    // <div
    //   {...rest}
    //   className={`${className} w-full text-center border-b border-gray-400 m-4`}
    //   style={{ lineHeight: "0.1em" }}
    // >
    //   <span className="bg-white px-2">{children}</span>
    // </div>
    <div
      {...rest}
      className={`${className} w-full text-center flex items-center`}
    >
      {position === "left" && <h5 className="px-3">{children}</h5>}
      <div className="flex-1 bg-gray-300" style={{ height: "1px" }}></div>
      {position === "center" && <h5 className="px-3">{children}</h5>}
      <div className="flex-1 bg-gray-300" style={{ height: "1px" }}></div>
      {position === "right" && <h5 className="px-3">{children}</h5>}
    </div>
  );
}

export default Divider;
