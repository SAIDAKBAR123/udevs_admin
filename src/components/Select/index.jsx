import { BorderLeft } from "@material-ui/icons";
import Select from "react-select";

function CSelect({
  children,
  className,
  placeholder = "Select...",
  isClearable = false,
  isSearchable = false,
  isMulti = false,
  isDisabled = false,
  isLoading = false,
  options = [],
  borderRight,
  borderLeft,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  defaultValue,
  style,
  ...rest
}) {
  const customStyles = {
    control: (styles) => {
      return {
        ...styles,
        borderRadius: "0.5rem",
        borderTopLeftRadius: borderTopLeftRadius,
        borderTopRightRadius: borderTopRightRadius,
        borderBottomLeftRadius: borderBottomLeftRadius,
        borderBottomRightRadius: borderBottomRightRadius,
        border: "2px solid rgba(229, 231, 235)",
        ":hover": {
          border: "2px solid rgba(64, 148, 247, 1)",
        },
        borderRight: borderRight,
        boderLeft: borderLeft,
        ":focus-within": {
          border: "2px solid rgba(64, 148, 247, 0.5)",
          boxShadow:
            "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        },
      };
    },
    option: (styles) => {
      return {
        ...styles,
      };
    },
  };

  return (
    <div
      style={style}
      className={`${className} text-body focus-within:z-40 border-0`}
    >
      <Select
        className="basic-single"
        classNamePrefix="select"
        placeholder={placeholder}
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isMulti={isMulti}
        isClearable={isClearable}
        isSearchable={isSearchable}
        options={options}
        styles={customStyles}
        {...rest}
      />
    </div>
  );
}

export default CSelect;
