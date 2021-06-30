import { ReactComponent as InfoIcon } from "../../assets/icons/infoIcon.svg";
import { ReactComponent as CancelIcon } from "../../assets/icons/cancelIcon.svg";

export default function Modal(props) {
  const {
    children,
    title = "Modal dialog",
    isOpen = false,
    maxWidth = 500,
    onClose = function () {},
    primaryAction = null,
    secondaryAction = null,
    className,
    ...rest
  } = props;

  const btnOutlined = {
    height: "32px",
    width: "66px",
    borderRadius: "6px",
    border: "1px solid #DDE2E4",
    background: "transparent",
  };

  const btnPrimary = {
    height: "32px",
    width: "66px",
    borderRadius: "6px",
    border: "1px solid #4094F7",
    background: "#4094F7",
    color: "#FFF",
  };

  return (
    isOpen && (
      <>
        <div
          onClick={onClose}
          className="modal-overlay bg-gray-900 opacity-50 fixed inset-0 z-40"
        ></div>
        <div
          {...rest}
          className={`${className} modal flex justify-center items-center mx-auto overflow-x-hidden overflow-y-hidden fixed inset-x-0 z-50`}
          style={maxWidth && { maxWidth: maxWidth }}
        >
          <div
            className="nodal-container flex flex-row transition duration-700 ease-in-out"
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
              <p className="font-thin text-gray-500 my-1">{children}</p>
              {children !== "" && (
                <div className="flex flex-row-reverse mt-2">
                  {primaryAction && (
                    <button style={btnPrimary} onClick={primaryAction}>
                      Action
                    </button>
                  )}
                  {secondaryAction && (
                    <button className="mx-2" style={btnOutlined}>
                      Action
                    </button>
                  )}
                </div>
              )}
            </div>
            {children === "" && (
              <div className="flex flex-row text-sm mt-1">
                {primaryAction && (
                  <button style={btnPrimary} onClick={primaryAction}>
                    Action
                  </button>
                )}
                {secondaryAction && (
                  <button className="mx-2" style={btnOutlined}>
                    Action
                  </button>
                )}
              </div>
            )}
            <div className="cursor-pointer m-2">
              <CancelIcon onClick={onClose} />
            </div>
          </div>
        </div>
      </>
    )
  );
}
