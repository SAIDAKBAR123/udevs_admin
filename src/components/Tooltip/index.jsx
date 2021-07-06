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

  const arrowStyle = {
    ":after": {
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
    <div {...rest} className={`${className} has-tooltip `}>
      <span
        className={`${
          getTheme(theme).color
        } ${arrowStyle} tooltip rounded shadow-lg text-xs 
         -mt-8 px-2 py-1`}
        style={arrowStyle}
      >
        {title}
        {/* <svg
          class={`absolute z-10 w-4 h-4 ${
            theme === "dark" ? "text-gray-900" : "text-gray-100"
          } transform translate-x-2 translate-y-0 fill-current stroke-current`}
          width="8"
          height="8"
        >
          <rect x="5" y="-10" width="8" height="8" transform="rotate(45)" />
        </svg> */}
        {/* {arrow ? <span className={classes.arrow} ref={setArrowRef} /> : null} */}
      </span>

      {children}
    </div>
  );
}

export default Tooltip;
