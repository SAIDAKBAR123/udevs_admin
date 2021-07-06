import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Button(props) {
  const classes = useStyles();
  const {
    className,
    children,
    icon: Icon,
    color = "primary",
    loading = false,
    shape = "filled",
    borderWidth = 2,
    position = "left",
    size = "medium",
    ...rest
  } = props;

  console.log(children);

  const getSize = (key) => {
    switch (key) {
      case "small":
        return {
          size: "h-6 px-2 py-0",
          fontSize: "text-sm",
          radius: "rounded",
        };
      case "medium":
        return {
          size: "h-8 px-3 py-1 min:w-7",
          fontSize: "text-sm",
          radius: "rounded-md",
        };
      case "large":
        return {
          size: "px-4 py-2",
          fontSize: "text-sm",
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
          color: `bg-${color} iconColor-filled hover:opacity-90`,
          background: "",
        };
      case "outlined":
        return {
          color: `bg-transparent text-${color} border-${borderWidth} border-${color} hover:bg-background_2`,
        };
      case "text":
        return { color: `bg-transparent text-${color} hover:opacity-90` };

      default:
        return { color: "iconColor-filled" };
    }
  };

  return (
    <div>
      <button
        type="button"
        className={`
                        ${className}
                        
                        focus:outline-none
                        transition
                        ${children ? "" : "w-9 h-9"}
                        focus:ring focus:border-blue-300 
                        focus-within:z-40
                        ${getSize(size).size}
                        ${getSize(size).radius}
                        ${
                          props.disabled
                            ? "bg-gray-200 cursor-not-allowed"
                            : getShape(shape).color
                        }
                        text-white 
                        `}
        {...rest}
      >
        <div
          className={`flex items-center ${
            children ? "space-x-2" : ""
          } font-medium font-semibold`}
        >
          {Icon && position === "left" && <Icon style={{ fontSize: "18px" }} />}

          <div className={getSize(size).fontSize}>{children}</div>
          {position === "right" && <Icon />}
        </div>
      </button>
    </div>
  );
}
