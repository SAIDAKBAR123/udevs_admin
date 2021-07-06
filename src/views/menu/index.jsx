import Wrapper from "../../components/Template/index.jsx";
import Menu from "../../components/Menu/index";
import MenuItem from "../../components/Menu/MenuItem";
import { useState } from "react";
import CSelect from "../../components/Select/index.jsx";
import Input from "../../components/Input";
import InputGroup from "../../components/InputGroup/index.jsx";
import Tooltip from "../../components/Tooltip/index.jsx";
import Button from "../../components/Buttons";
import Divider from "../../components/Divider/index.jsx";

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
        <CSelect options={options} />
      </div>
      <h5 className="pb-4">Input Groups</h5>
      <div className="flex">
        <InputGroup>
          <Input placeholder="First Name" />
          <Input placeholder="Middle Name" />
          <Input placeholder="Last Name" />
        </InputGroup>
      </div>
      <h5 className="py-4">Select Groups</h5>
      <div className="flex">
        <InputGroup>
          <CSelect options={options} style={{ width: "250px" }} />
          <CSelect options={options} style={{ width: "250px" }} />
          <CSelect options={options} style={{ width: "250px" }} />
        </InputGroup>
      </div>
      <h5 className="py-4">Button Groups</h5>
      <div className="flex">
        <InputGroup>
          <Button shape="filled">Button 1</Button>
          <Button shape="outlined">Button 1</Button>
          <Button shape="filled">Button 1</Button>
        </InputGroup>
      </div>
      <h5 className="py-4">Divider</h5>
      <div className="flex">
        <Divider>Center context</Divider>
      </div>
      <div className="h5 py-4">Tooltip</div>
      <div className="flex">
        <Tooltip title="asdsadsadasd">
          <Button>Hover over me</Button>
        </Tooltip>
        {/* <Tag shape="subtle" color="error">
          asdasdsadsa sadasdas
        </Tag> */}
      </div>
    </Wrapper>
  );
}

export default App;
