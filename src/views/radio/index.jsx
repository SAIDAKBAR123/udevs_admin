import Wrapper from "../../components/Template/index";
import Radio from "../../components/Radio";

export default function App() {

  return (
    <Wrapper>
      <h5>Radio</h5>
      <div>
        <strong>Large</strong>
        <div style={{ marginBottom: '12px' }} className="flex justify-around">
          <div>
            <Radio
              text="primary"
              name="radio"
            />
          </div>
          <div>
            <Radio
              text="error"
              name="radio"
              size="large"
              error
            />
          </div>
          <div>
            <Radio
              text="disabled"
              name="radio"
              size="large"
              disabled
            />
          </div>
        </div>
        <strong>Medium</strong>
        <div style={{ marginBottom: '12px' }} className="flex justify-around">
          <div>
            <Radio
              text="primary"
              name="radiom"
              size="medium"
            />
          </div>
          <div>
            <Radio
              text="error"
              name="radiom"
              size="medium"
              error
            />
          </div>
          <div>
            <Radio
              text="disabled"
              name="radiom"
              size="medium"
              disabled
            />
          </div>
        </div>
        <strong>Small</strong>
        <div style={{ marginBottom: '12px' }} className="flex justify-around">
          <div>
            <Radio
              text="primary"
              name="radios"
              size="small"
            />
          </div>
          <div>
            <Radio
              text="error"
              name="radios"
              size="small"
              error
            />
          </div>
          <div>
            <Radio
              text="disabled"
              name="radios"
              size="small"
              disabled
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
