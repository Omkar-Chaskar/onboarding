import { useState } from "react";
import {
  Form,
  InputGroup,
  Col,
  Row,
  Card,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { BsFillPersonFill , BsCheck} from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { useOnboarding } from "../context/onboardingProvider";
import { MultiStepProgressBar, Buttons } from "./index";

function FormOnbord() {
  const { state, dispatch } = useOnboarding();

  const [index, setIndex] = useState(0);

  const nextStepButton = () => {
    if (index - 3) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIndex(0);
    }
  };

  const initialValue = (e) => {
    e.target.value = " ";
  };
  const [radioValue, setRadioValue] = useState(state.usefor);

  const radios = [
    {
      title: "For myself",
      text: "Write better. Think more clearly. Stay organized.",
      value: 1,
    },
    {
      title: "With my team",
      text: "Wikis, docs, tasks &amp; projects, all in one place.",
      value: 2,
    },
  ];

  const formHeading = [
    {
      header: "Welcome! First things First...",
      sub: "You can always change them later."
    },
    {
      header: "Let's set up a home for all your work",
      sub: "You can always create another workspace later."
    },
    {
      header: "How are you planning to use Eden?",
      sub: "We'll streamline your setup experience accordingly."
    }
  ];

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={() => handleFormSubmit()} className="p-2 p-sm-3">
      <MultiStepProgressBar step={index} />

      {(() => {
        switch (index) {
          case 0:
            return (
              <>
                <div className="text-center">
                  <h2>{formHeading[index].header}</h2>
                  <p className="text-muted font-weight-bold">{formHeading[index].sub}</p>
                </div>
                <Form.Group className="my-3" controlId="formGroup">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Steve Jobs"
                    name="fullname"
                    value={state.fullname}
                    onChange={(e) => {
                      dispatch({
                        type: "SET_DATA",
                        value: e.target.value,
                        key: e.target.name,
                      });
                      initialValue(e);
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group className="my-3" controlId="formGroup">
                  <Form.Label>Displpay Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Steve"
                    name="displayname"
                    value={state.displayname}
                    onChange={(e) => {
                      dispatch({
                        type: "SET_DATA",
                        value: e.target.value,
                        key: e.target.name,
                      });
                      initialValue(e);
                    }}
                    required
                  />
                </Form.Group>
              </>
            );

          case 1:
            return (
              <>
              <div className="text-center">
                  <h2>{formHeading[index].header}</h2>
                  <p className="text-muted font-weight-bold">{formHeading[index].sub}</p>
                </div>
                <Form.Group className="mb-3" controlId="formGroup">
                  <Form.Label>Workspace Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Eden"
                    name="workspacename"
                    value={state.workspacename || ""}
                    onChange={(e) => {
                      dispatch({
                        type: "SET_DATA",
                        value: e.target.value,
                        key: e.target.name,
                      });
                      initialValue(e);
                    }}
                    required
                  />
                </Form.Group>

                <Form.Label htmlFor="basic-url">
                  Workspace URL <span className="text-muted">(optional)</span>
                </Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                    www.eden.com/
                  </InputGroup.Text>
                  <Form.Control
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    placeholder="Example"
                    name="workspaceurl"
                    value={state.workspaceurl}
                    onChange={(e) => {
                      dispatch({
                        type: "SET_DATA",
                        value: e.target.value,
                        key: e.target.name,
                      });
                      initialValue(e);
                    }}
                  />
                </InputGroup>
              </>
            );

          case 2:
            return (
              <>
              <div className="text-center">
                  <h2>{formHeading[index].header}</h2>
                  <p className="text-muted font-weight-bold">{formHeading[index].sub}</p>
                </div>
                <ButtonGroup>
                  <Row>
                    {radios.map((radio, idx) => {
                      return (
                        <Col key={idx}>
                          <ToggleButton
                            id={`radio-${idx}`}
                            type="radio"
                            variant={"white"}
                            name="usefor"
                            className="text-dark"
                            value={radio.value}
                            checked={radio.value === radioValue}
                            onChange={(e) => {
                              setRadioValue(radio.value);
                              dispatch({
                                type: "SET_DATA",
                                value: e.target.value,
                                key: e.target.name,
                              });
                            }}
                          >
                            <Card>
                              <Card.Body className="text-start">
                                <Card.Title as="h2">
                                  {idx === 0 ? (
                                    <BsFillPersonFill />
                                  ) : (
                                    <HiUserGroup />
                                  )}
                                </Card.Title>
                                <Card.Title>{radio.title}</Card.Title>
                                <Card.Text className="mb-2 text-muted">
                                  {radio.text}
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </ToggleButton>
                        </Col>
                      );
                    })}
                  </Row>
                </ButtonGroup>
              </>
            );

          case 3:
            return (
              <>
                <div className="text-center">
                  <div className="">
                    <BsCheck size={50} className="roundIcon p-2 my-2" />
                  </div>
                  <h2 className="mt-4">
                    Congratulations, {state.displayname}!
                  </h2>
                  <p className="text-muted my-2">
                    You have completed onboarding, you can start using the Eden!
                  </p>
                </div>
              </>
            );

          default:
            <></>;
        }
      })()}

      <Buttons nextStepButton={nextStepButton} step={index} />
    </Form>
  );
}

export default FormOnbord;
