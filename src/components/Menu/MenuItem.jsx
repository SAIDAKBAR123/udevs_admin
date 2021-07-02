import React from "react";

function MenuItem(props) {
  const { children, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={`${className} flex cursor-pointer bg-gray-100 hover:bg-gray-200 py-2 px-4`}
    >
      {children}
    </div>
  );
}

export default MenuItem;
