import Wrapper from "../../components/Template/index";
import Checkbox from "../../components/Checkbox";

export default function App() {

  return (
    <Wrapper>
      <h5>Checkbox</h5>
      <div>
        <strong>Large</strong>
        <div className="flex justify-around">
          <div>
            <Checkbox
              text="dark"
              size="large"
            />
          </div>
          <div>
            <Checkbox
              text="error"
              size="large"
              error
            />
          </div>
          <div>
            <Checkbox
              text="disabled"
              size="large"
              disabled
            />
          </div>
        </div>
        <strong>Middle</strong>
        <div className="flex justify-around">
          <div>
            <Checkbox
              text="dark"
              size="middle"
            />
          </div>
          <div>
            <Checkbox
              text="error"
              size="middle"
              error
            />
          </div>
          <div>
            <Checkbox
              text="disabled"
              size="middle"
              disabled
            />
          </div>
        </div>
        <strong>Small</strong>
        <div className="flex justify-around">
          <div>
            <Checkbox
              text="dark"
              size="small"
            />  
          </div>
          <div>
            <Checkbox
              text="error"
              size="small"
              error
            />
          </div>
          <div>
            <Checkbox
              text="disabled"
              size="small"
              disabled
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
