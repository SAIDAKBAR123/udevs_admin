import Wrapper from "../../components/Template/index.jsx";
import Menu from "../../components/Menu/index";
import MenuItem from "../../components/Menu/MenuItem";
import CustomDropdown from "../../components/Dropdown/CustomDropdown.jsx";
import { useState } from "react";
import TextHighlight from "../../components/TextHighlight/index.jsx";
import CustomSelect from "../../components/Select/index.jsx";
import Tag from "../../components/Tag/index.jsx";

function App() {
  const [expand, setExpand] = useState(false);

  return (
    <Wrapper>
      <h5>Menu</h5>
      <div className="flex">
        <Menu
          title="Settings"
          onChange={() => setExpand((prev) => !prev)}
          isExpanded={expand}
        >
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </Menu>

        <TextHighlight>Highlighted</TextHighlight>
        <CustomSelect />
        <div className="flex space-x-2">
          <Tag size="small" shape="outlined" color="success">
            Badge
          </Tag>
          <Tag size="medium" color="purple" shape="subtle">
            Badge
          </Tag>
          <Tag size="large" shape="subtle">
            Badge
          </Tag>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
