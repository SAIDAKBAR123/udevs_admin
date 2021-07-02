import React from "react";

function TextHighlight({
  children,
  className,
  size = "medium",
  color = "blue",
  ...rest
}) {
  return (
    <div
      {...rest}
      className={`${className} bg-${color}-200 text-${color}-600 rounded-md cursor-pointer my-auto mx-2 py-1 px-4`}
    >
      {children}
    </div>
  );
}

export default TextHighlight;
