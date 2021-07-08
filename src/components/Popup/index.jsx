import { ReactComponent as CancelIcon } from "../../assets/icons/cancelIcon.svg";
import "./index.css";

function Popup(props) {
  const {
    top,
    bottom,
    left,
    right,
    mode = "light",
    children,
    title = "Popup title",
    isOpen = false,
    minWidth = 150,
    onClose = function () {},
    className,
    ...rest
  } = props;

  const popupStyle = `top-${top} bottom-${bottom} right-${right} left-${left}`;

  return (
    isOpen && (
      <>
        <div onClick={onClose} className=" fixed inset-0 z-40"></div>
        <div
          {...rest}
          className={`${className} ${popupStyle} flex absolute z-50`}
          style={minWidth && { width: minWidth }}
        >
          <div
            className="flex flex-row ease-in-out p-3 customTop"
            style={{
              background: mode === "dark" ? "#333" : "#fff",
              borderRadius: "6px",
              boxShadow:
                "0px 0px 1px rgba(26, 32, 36, 0.32), 0px 40px 64px rgba(91, 104, 113, 0.24)",
            }}
          >
            <div
              className={`${
                mode === "dark" && "text-gray-200"
              } flex flex-col text-sm font-semibold mx-2 my-1`}
            >
              <h5>{title}</h5>
              <p
                className={`${
                  mode === "dark" ? "text-gray-300" : "text-gray-500"
                } font-thin my-1`}
              >
                {children}
              </p>
            </div>

            <div className="cursor-pointer mx-1 my-1">
              <CancelIcon onClick={onClose} />
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Popup;
