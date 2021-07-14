import Steps from "../../components/Steps";
import Wrapper from "../../components/Template";
import Step from "../../components/Steps/Step";

const steps1 = [
  {
    type: "finished",
    passed: true,
    title: "Shipping",
    subtitle:
      "We designers do our best to champion the user and guard against dark patterns",
  },
  {
    type: "finished",
    passed: true,
    title: "Billing",
    subtitle:
      "We designers do our best to champion the user and guard against dark patterns",
  },
  {
    type: "active",
    passed: false,
    title: "Confirm order",
    subtitle:
      "We designers do our best to champion the user and guard against dark patterns loremas",
  },
  {
    type: "default",
    passed: false,
    title: "Delivering",
    subtitle:
      "We designers do our best to champion the user and guard against dark patterns",
  },
];

const extraContent = <h1>Extra content</h1>

export default function App() {
  return (
    <Wrapper header="Steps" className="font-body">
      {/* HORIZONTAL LARGE EXAMPLES */}

      <h2>Horizontal (large)</h2>
      <hr />
      <div style={{ padding: "20px" }}>
        <Steps steps={steps1}  />

        <hr style={{ margin: "20px" }} />
        <Steps>
          {steps1.map((step, index) => (
            <Step key={index} passed={step.passed} type={step.type} >
              <h1>Hello world</h1>
            </Step>
          ))}
        </Steps>

        <hr style={{ margin: "20px" }} />
      </div>

      {/* HORIZONTAL SMALL EXAMPLES */}

      <h2>Horizontal (small)</h2>
      <hr />
      <div style={{ padding: "20px" }}>
        <Steps steps={steps1} size="small" />

        <hr style={{ margin: "20px" }} />
        <Steps size="small">
          {steps1.map((step, index) => (
            <Step
              key={index}
              passed={step.passed}
              type={step.type}
              subtitle={step.title}
              extra={extraContent}
            />
          ))}
        </Steps>

        <hr style={{ margin: "20px" }} />
      </div>

      {/* VERTICAL LARGE EXAPMLES */}

      <h2>Vertical (large)</h2>
      <hr />
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Steps steps={steps1} layout="vertical" />

        <Steps layout="vertical">
          {steps1.map((step, index) => (
            <Step
              key={index}
              passed={step.passed}
              type={step.type}
              subtitle={step.title}
              extra={extraContent}
            />
          ))}
        </Steps>

        <hr style={{ margin: "20px" }} />
      </div>

      {/* ICON EXAMPLES (LARGE)*/}
      <hr style={{ margin: "20px" }} />
      <h2>Icon examples (large)</h2>
      <hr style={{ margin: "20px" }} />

      <div>
        <Steps>
          <Step subtitle="default"/>
          <Step type="finished" passed subtitle="finished (passed)"/>
          <Step type="active" subtitle="active" />
          <Step type="error" passed subtitle="error  (passed)" />
          <Step type="error" subtitle="error" />
        </Steps>
      </div>

      {/* ICON EXAMPLES (SMALl)*/}
      <hr style={{ margin: "20px" }} />
      <h2>Icon examples (small)</h2>
      <hr style={{ margin: "20px" }} />

      <div>
        <Steps size="small">
          <Step subtitle="default"/>
          <Step type="finished" passed subtitle="finished (passed)"/>
          <Step type="active" subtitle="active" />
          <Step type="error" passed subtitle="error  (passed)" />
          <Step type="error" subtitle="error" />
        </Steps>
      </div>
    </Wrapper>
  );
}
