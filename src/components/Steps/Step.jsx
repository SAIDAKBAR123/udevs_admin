import {
  activeIcon,
  finishedIcon,
  errorIcon,
  activeSmallIcon,
  errorSmallIcon,
} from "./icons";

const StepIndicator = ({
  children,
  type = "default",
  passed = false,
  size,
  title,
  subtitle,
}) => {
  return (
    <div className="step">
      <div className="step__indicator">
        <div className={`step__indicator__icon ${type} ${size}`}>
          <IconGenerator type={type} size={size} />
        </div>

        <div className="step__indicator__line ">
          <div className={`passed-status ${passed ? "passed" : ""}`} />
        </div>
      </div>

      <div className="step__description">
        {title && <p className="step__description__title">{title}</p>}
        {subtitle && <p className="step__description__text">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

const IconGenerator = ({ type, size }) => {
  switch (type + "/" + size) {
    case "active/large":
      return <div>{activeIcon}</div>;

    case "finished/large":
      return <div>{finishedIcon}</div>;

    case "error/large":
      return <div>{errorIcon}</div>;

    case "active/small":
      return <div>{activeSmallIcon}</div>;

    case "error/small":
      return <div>{errorSmallIcon}</div>;

    case "finished/small":
      return <div className="small-icon finished" />;

    case "default/small":
      return <div className="small-icon" />;

    default:
      return null;
  }
};

export default StepIndicator;
