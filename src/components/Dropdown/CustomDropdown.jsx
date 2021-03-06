function CustomDropdown(props) {
  const {
    children = [],
    className,
    placeholder = "",
    description = "",
    info = "",
    borderColor = "#DDE2E4",
    size = "medium",
    icon,
    disabled = false,
    outline = true,
    ...rest
  } = props;

  return (
    <div {...rest} className={`${className} w-full`}>
      <select
        name="subject"
        id="subject"
        className={`${placeholder === "" && "text-gray-500"} ${
          placeholder === "Error" && "text-red-600"
        } ${outline && "border"} ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }
          rounded-md px-3 text-sm 
          hover:bg-purple-700 w-full`}
        style={{
          height:
            size === "large" ? "40px" : size === "medium" ? "32px" : "24px",
          border: outline && `1px solid ${borderColor}`,
          background: "transparent",
        }}
        disabled={disabled}
      >
        {children.map((el) => (
          <option key={el.value}>{el.label}</option>
        ))}
      </select>
      <p
        className={`${
          placeholder === "Error" && "text-red-600"
        } mx-1 text-gray-500 text-xs`}
      >
        {info}
      </p>
    </div>
  );
}

export default CustomDropdown;
