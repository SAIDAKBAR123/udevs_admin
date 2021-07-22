import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useState, useEffect } from "react";

function Tree({
  caret = "Item 1",
  icon: Icon,
  firstLevel = false,
  size = "large",
  hasCheckbox = true,
  children = [],
  className,
  ...rest
}) {
  const [isClicked, setIsClicked] = useState(false);

  const getSize = (theme) => {
    switch (theme) {
      case "small":
        return {
          size: "text-xs",
        };
      case "large":
        return {
          size: "leading-6 text-sm",
        };
      default:
        return {};
    }
  };

  useEffect(() => {
    console.log("isClicked");
  }, [isClicked]);

  return (
    <div className={`${className} ${getSize(size).size}`}>
      <span
        className="flex rounded cursor-pointer items-center hover:bg-gray-100"
        onClick={() => setIsClicked((prev) => !prev)}
      >
        <ArrowForwardIosIcon
          style={{ fontSize: "10px" }}
          className={`${
            isClicked && "rotate-90"
          } transform transition duration-300 ease-in-out`}
        />

        <span className={`${firstLevel && "font-bold"} flex items-center pl-2`}>
          {Icon && <Icon style={{ fontSize: "18px", color: "#777" }} />}

          <span className={`${Icon ? "pl-2" : "pl-0.5"}`}>{caret}</span>
        </span>
      </span>
      <ul className={`${!isClicked && "hidden"} pl-2.5`}>
        {children.map((item, index) => (
          <li key={index} className="pl-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tree;
