import { useRef } from "react";
import "./index.css";

function arrowGenerator() {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.71em",
      marginLeft: 4,
      marginRight: 4,
      "&::before": {
        transformOrigin: "0 100%",
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.71em",
      marginLeft: 4,
      marginRight: 4,
      "&::before": {
        transformOrigin: "100% 0",
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.71em",
      height: "1em",
      width: "0.71em",
      marginTop: 4,
      marginBottom: 4,
      "&::before": {
        transformOrigin: "100% 100%",
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.71em",
      height: "1em",
      width: "0.71em",
      marginTop: 4,
      marginBottom: 4,
      "&::before": {
        transformOrigin: "0 0",
      },
    },
  };
}

function Tooltip(props) {
  const {
    children,
    title = "Tooltip",
    theme = "dark",
    className,
    arrow = false,
    placement = "top",
    ...rest
  } = props;
  // bg-gray-100 text-gray-800

  const getTheme = (key) => {
    switch (key) {
      case "light":
        return {
          color: "bg-gray-100 text-gray-900",
        };
      case "dark":
        return {
          color: "bg-gray-800 text-gray-100",
        };

      default:
        break;
    }
  };

  const getPosition = (key) => {
    switch (key) {
      case "top":
        return {
          position: "-mt-8 arrowBottom",
        };
      case "bottom":
        return {
          position: "-mb-10 arrowTop",
        };
      case "right":
        return {
          position: "-mr-8 arrowLeft",
        };
      case "left":
        return {
          position: "-mt-8 arrowRight",
        };

      default:
        break;
    }
  };

  const arrowStyle = {
    "&::after": {
      content: "",
      display: "block",
      position: "absolute",
      borderTop: "8px solid transparent",
      borderBottom: "8px solid transparent",
      borderRight: "8px solid black",
      left: "-6px",
      top: "5px",
    },
  };

  return (
    <div {...rest} className={`${className} has-tooltip`}>
      <span
        className={`${getTheme(theme).color} ${
          getPosition(placement).position
        } tooltip rounded shadow-lg text-xs  
          mx-2 px-2 py-1 `}
      >
        {title}
      </span>

      {children}
    </div>
  );
}

export default Tooltip;
