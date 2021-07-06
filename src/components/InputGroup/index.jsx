import { useState } from "react";
import Input from "../Input";

function InputGroup(props) {
  const { children, className, ...rest } = props;
  const [isSelected, setIsSelected] = useState(
    new Array(children.length).fill(false)
  );

  return (
    <div {...rest} className={`${className} flex`}>
      {children}
    </div>
  );
}

export default InputGroup;

{
  /* <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">First and last name</span>
  </div>
  <input type="text" aria-label="First name" class="form-control">
  <input type="text" aria-label="Last name" class="form-control">
</div> */
}
