import Wrapper from "../../components/Template/index.jsx";
import Menu from "../../components/Menu/index";
import MenuItem from "../../components/Menu/MenuItem";
import { useState } from "react";
import TextHighlight from "../../components/TextHighlight/index.jsx";

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
      </div>
    </Wrapper>
  );
}

export default App;
