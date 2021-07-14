import React from "react";
import "./index.scss";
import Step from "./Step";

const Steps = ({ children, steps, size = "large", layout = "horizontal" }) => {
  return (
    <div className={`steps ${layout}`}>
      {steps?.map((step, index) => (
        <Step
          key={index}
          type={step.type}
          passed={step.passed}
          size={size}
          title={step.title}
          subtitle={step.subtitle}
        />
      ))}

      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          size: size,
        });
      })}
    </div>
  );
};

export default Steps;
