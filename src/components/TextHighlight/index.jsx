import { useState } from "react";

function TextHighlight({
  children,
  className,
  size = "medium",
  color = "blue",
  postIcon,
  ...rest
}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    !isClicked && (
      <div
        {...rest}
        className={`${className} bg-${color}-200 text-${color}-600 rounded-md text-sm cursor-pointer my-auto py-1 px-4`}
      >
        <div className="flex items-center justify-center">
          {children}
          {postIcon && (
            <span
              className="pl-2"
              onClick={() => setIsClicked((prev) => !prev)}
            >
              {postIcon}
            </span>
          )}
        </div>
      </div>
    )
  );
}

export default TextHighlight;
