import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

export default function Tag({
  children,
  icon: Icon,
  color = "primary",
  loading = false,
  disabled,
  shape = "filled",
  removable = true,
  size = "medium",
  ...rest
}) {

  const [isClicked, setIsClicked] = useState(false);

  const getSize = (key) => {
    switch (key) {
      case "small":
        return {
          size: "px-1",
          fontSize: "text-xs",
          radius: "rounded",
        };
      case "medium":
        return {
          size: "px-3",
          fontSize: "text-md",
          radius: "rounded-md",
        };
      case "large":
        return {
          size: "px-3 py-1",
          fontSize: "text-md",
          radius: "rounded-md",
        };

      default:
        break;
    }
  };

  const getShape = (key) => {
    console.log(key);
    switch (key) {
      case "filled":
        return {
          color: `bg-${color} iconColor-filled `,
          background: "",
        };
      case "outlined":
        return {
          color: `bg-transparent text-${color} border border-${color} `,
        };
      case "subtle":
        return { color: `bg-${color}-light text-${color}` };

      default:
        return { color: "iconColor-filled" };
    }
  };

  return (
    !isClicked && (
      <div
        className={`
                        flex
                        focus:outline-none
                        transition
                        justify-center
                        ${children ? "" : "w-9 h-9"}
                        focus:ring focus:border-blue-300 
                        ${getSize(size).size}
                        ${getSize(size).radius}
                        ${
                          disabled
                            ? "bg-gray-200 cursor-not-allowed"
                            : getShape(shape).color
                        }
                        text-white 
                        `}
        {...rest}
      >
        <div
          className={`flex  items-center ${
            children ? "space-x-1" : ""
          } font-semibold`}
        >
          {Icon && <Icon style={{ fontSize: "18px" }} />}

          <div className={`${getSize(size).fontSize}`}>{children}</div>
          {removable && (
            <CloseIcon
              style={{ fontSize: "14px" }}
              className="cursor-pointer"
              onClick={() => setIsClicked((prev) => !prev)}
            />
          )}
        </div>
      </div>
    )
  );
}
