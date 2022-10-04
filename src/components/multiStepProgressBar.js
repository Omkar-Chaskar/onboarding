import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

function MultiStepProgressBar(props) {
  return (
    <ProgressBar
      percent={(props.step * 100) / 3}
    >
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${
                accomplished ? "accomplished text-white" : null
              }`}
            >
              {index + 1}
            </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${
                accomplished ? "accomplished text-white" : null
              }`}
            >
              {index + 1}
            </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${
                accomplished ? "accomplished text-white" : null
              }`}
            >
              {index + 1}
            </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${
                accomplished ? "accomplished text-white" : null
              }`}
            >
              {index + 1}
            </div>
          </>
        )}
      </Step>
    </ProgressBar>
  );
}

export default MultiStepProgressBar;
