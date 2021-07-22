import { useState, useEffect } from "react";

function InputGroup(props) {
  const { children = [], className, ...rest } = props;
  const [renderedContent, setRenderedContent] = useState([]);
  const listLength = children.length;

  useEffect(() => {
    console.log(children);
    setRenderedContent(
      children.map((el, index) => ({
        ...el,
        props: {
          ...el.props,
          className:
            index === 0
              ? "rounded-r-none border-r-0"
              : index === listLength - 1
              ? "rounded-l-none"
              : "rounded-r-none rounded-l-none border-r-0",
          borderRight: index === 0 ? "0" : index === listLength - 1 ? "" : "0",
          borderTopLeftRadius: index === 0 ? "" : "0",
          borderTopRightRadius:
            index === 1 ? "0" : index === listLength - 1 ? "" : "0",
          borderBottomLeftRadius: index === 0 ? "" : "0",
          borderBottomRightRadius:
            index === 1 ? "0" : index === listLength - 1 ? "" : "0",
        },
      }))
    );
  }, []);

  return (
    <div {...rest} className={`${className} flex`}>
      {renderedContent}
    </div>
  );
}

export default InputGroup;
