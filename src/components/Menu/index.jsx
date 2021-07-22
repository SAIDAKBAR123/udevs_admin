import { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";

function Menu(props) {
  const {
    title,
    children,
    className,
    isExpanded = false,
    onChange = function () {},
    ...rest
  } = props;

  const [expand, setExpand] = useState(isExpanded);

  useEffect(() => {
    setExpand(isExpanded);
    // onChange(expand)
  }, [isExpanded]);

  return (
    <div {...rest} className={`${className} bg-gray-200 rounded-md`}>
      <div
        className="flex justify-between cursor-pointer py-2 px-3"
        onClick={onChange}
        style={{ minWidth: "200px" }}
      >
        <div>{title}</div>
        <div
          className={`${
            expand ? "-rotate-180" : "rotate-0"
          }  transform transition duration-300 ease-in-out`}
        >
          <ExpandMoreIcon />
        </div>
      </div>

      <div className="flex flex-col">{expand && children}</div>
    </div>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Menu;
