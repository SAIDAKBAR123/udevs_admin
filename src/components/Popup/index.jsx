import { ReactComponent as InfoIcon } from "../../assets/icons/infoIcon.svg";
import { ReactComponent as CancelIcon } from "../../assets/icons/cancelIcon.svg";

function Popup(props) {
  const {
    top,
    bottom,
    left,
    right,
    children,
    title = "Popup title title title title title title title",
    isOpen = false,
    minWidth = 250,
    onClose = function () {},
    className,
    ...rest
  } = props;

  const popupStyle = `top-${top} bottom-${bottom} right-${right} left-${left}`;

  return (
    isOpen && (
      <>
        <div onClick={onClose} className="fixed inset-0 z-40"></div>
        <div {...rest} className={`${className} flex`}>
          <div
            {...rest}
            className={`${className} ${popupStyle} flex absolute z-50`}
            style={minWidth && { minWidth: minWidth }}
          >
            <div
              className="flex flex-row ease-in-out"
              style={{
                background: "#fff",
                borderRadius: "6px",
                boxShadow:
                  "0px 0px 1px rgba(26, 32, 36, 0.32), 0px 40px 64px rgba(91, 104, 113, 0.24)",
                padding: "14px",
              }}
            >
              <div className="m-2">
                <InfoIcon />
              </div>
              <div className="flex flex-col text-sm font-semibold m-2">
                <h5>{title}</h5>
                <p className="font-medium text-gray-500 my-1">{children}</p>
              </div>

              <div className="cursor-pointer m-2">
                <CancelIcon onClick={onClose} />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Popup;
