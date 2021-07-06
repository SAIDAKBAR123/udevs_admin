import Wrapper from "../../components/Template/index.jsx";
import Menu from "../../components/Menu/index";
import MenuItem from "../../components/Menu/MenuItem";
import CustomDropdown from "../../components/Dropdown/CustomDropdown.jsx";
import { useState } from "react";
import TextHighlight from "../../components/TextHighlight/index.jsx";
import CSelect from "../../components/Select/index.jsx";
import Tag from "../../components/Tag/index.jsx";
import Input from "../../components/Input";
import InputGroup from "../../components/InputGroup/index.jsx";

function App() {
  const [expand, setExpand] = useState(false);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <Wrapper>
      <h5>Menu</h5>
      <div className="flex py-4">
        <Menu
          title="Settings"
          onChange={() => setExpand((prev) => !prev)}
          isExpanded={expand}
        >
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </Menu>
      </div>
      <div className="grid grid-cols-2 gap-2 pb-4 ">
        <Input />
        <CSelect>{options}</CSelect>
      </div>
      <div className="flex">
        <InputGroup>
          <Input
            className="rounded-r-none focus-within:ring-none border-r-0"
            placeholder="Firs Name"
          />
          <Input
            className="rounded-l-none rounded-r-none focus-within:ring-0 "
            placeholder="Last Name"
          />
          <Input className="rounded-l-none focus-within:ring-0 border-l-0" />
        </InputGroup>
      </div>
    </Wrapper>
  );
}

export default App;
