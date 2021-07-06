import Select from "react-select";

function CSelect(props) {
  const {
    children,
    className,
    placeholder = "Select...",
    isClearable = true,
    isSearchable = false,
    isMulti = true,
    isDisabled = false,
    isLoading = false,
    style,
    ...rest
  } = props;

  const customStyles = {
    control: (styles) => {
      return {
        ...styles,
        borderRadius: "0.5rem",
        border: "2px solid rgba(229, 231, 235)",
        ":hover": {
          border: "2px solid rgba(64, 148, 247, 1)",
        },
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
    <div style={style} className={`${className} text-body `}>
      <Select
        className="basic-single"
        classNamePrefix="select"
        placeholder={placeholder}
        defaultValue={children[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isMulti={isMulti}
        isClearable={isClearable}
        isSearchable={isSearchable}
        options={children}
        styles={customStyles}
        {...rest}
      />
    </div>
  );
}

export default CSelect;
