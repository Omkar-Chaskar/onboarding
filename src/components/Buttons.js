import React from "react";
import Button from "react-bootstrap/Button";

function Buttons(props) {

  return (
    <div className="d-grid mt-4 pt-2 ">
      <Button size="lg" className="primaryBgColor p-2" onClick={props.nextStepButton}>
        {props.step === 4 ? "Create Workspace" : "Launch Eden"}
      </Button>
    </div>
  );
}

export default Buttons;
