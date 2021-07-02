import { useState } from "react";

//Icons
const crossIcon = (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.19998 0.806647C8.93998 0.546647 8.51998 0.546647 8.25998 0.806647L4.99998 4.05998L1.73998 0.79998C1.47998 0.53998 1.05998 0.53998 0.79998 0.79998C0.53998 1.05998 0.53998 1.47998 0.79998 1.73998L4.05998 4.99998L0.79998 8.25998C0.53998 8.51998 0.53998 8.93998 0.79998 9.19998C1.05998 9.45998 1.47998 9.45998 1.73998 9.19998L4.99998 5.93998L8.25998 9.19998C8.51998 9.45998 8.93998 9.45998 9.19998 9.19998C9.45998 8.93998 9.45998 8.51998 9.19998 8.25998L5.93998 4.99998L9.19998 1.73998C9.45331 1.48665 9.45331 1.05998 9.19998 0.806647Z"
      fill="#4094F7"
    />
  </svg>
);

function Segment(props) {
  const { children, className, icon, ...rest } = props;
  const [isClicked, setIsClicked] = useState(false);

  return (
    !isClicked && (
      <div
        {...rest}
        className={`${className} flex border rounded text-sm text-blue-500 py-1 px-2`}
      >
        <div className="flex items-center">
          <span className="pr-2">{icon}</span>

          {children}
          <span
            className="cursor-pointer pl-2"
            onClick={() => setIsClicked((prev) => !prev)}
          >
            {crossIcon}
          </span>
        </div>
      </div>
    )
  );
}

export default Segment;
