import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { useOnboarding } from '../context/onboardingProvider';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';

function FormOnbord() {

  const { state, dispatch } = useOnboarding();

  const initialValue = (e) => {
    e.target.value = " ";
  };

  // const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(state.usefor);

  const radios = [
    { title: 'For myself', text: 'Write better. Think more clearly. Stay organized.', value: 1 },
    { title: 'With my team', text: 'Wikis, docs, tasks &amp; projects, all in one place.', value: 2 },
  ];

  function handleFormSubmit(e){
    e.preventDefault();
    console.log(state)
  }

  return (
    <>
    <Form onSubmit={()=> handleFormSubmit()} className="p-4 p-sm-3">
      <Form.Group className="mb-3" controlId="formGroup">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Steve Jobs" name="firstname"
        value={state.firstname}
            onChange={(e) => {
              dispatch({
                type: "SET_DATA",
                value: e.target.value,
                key: e.target.name
              });
              initialValue(e);
            }}
            required
            />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroup">
        <Form.Label>Displpay Name</Form.Label>
        <Form.Control type="text" placeholder="Steve" name="displayname"
        value={state.displayname}
            onChange={(e) => {
              dispatch({
                type: "SET_DATA",
                value: e.target.value,
                key: e.target.name
              });
              initialValue(e);
            }}
            required
             />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroup">
        <Form.Label>Workspace Name</Form.Label>
        <Form.Control type="text" placeholder="Eden"  name="workspacename"
        value={state.workspacename}
            onChange={(e) => {
              dispatch({
                type: "SET_DATA",
                value: e.target.value,
                key: e.target.name
              });
              initialValue(e);
            }}
            required
            />
      </Form.Group>

      <Form.Label htmlFor="basic-url">Workspace URL <span className='text-muted'>(optional)</span></Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          www.eden.com/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder='Example'  name="workspaceurl"
        value={state.workspaceurl}
            onChange={(e) => {
              dispatch({
                type: "SET_DATA",
                value: e.target.value,
                key: e.target.name
              });
              initialValue(e);
            }}
            />
      </InputGroup>

      <ButtonGroup>
      <Row>
      {radios.map((radio, idx) =>{
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
            onChange={(e) =>{
              setRadioValue(radio.value);
              dispatch({
                type: "SET_DATA",
                value: e.target.value,
                key: e.target.name
              }); 
              console.log(radio.value + "-" + radioValue + "-" + state.usefor)
            }}
          >
        <Card>
      <Card.Body className='text-start'>
      <Card.Title as="h2">{idx === 0 ?<BsFillPersonFill/>:<HiUserGroup/>}</Card.Title>
        <Card.Title>{radio.title}</Card.Title>
        <Card.Text className="mb-2 text-muted">
          {radio.text}
        </Card.Text>
      </Card.Body>
    </Card>
    </ToggleButton>
        </Col>
      )})}
      </Row>
      </ButtonGroup>
      <div className="d-grid mt-3">
      <Button variant="primary" size="lg">
        Create Workspace
      </Button>
    </div>
    </Form>
    <Button variant="primary" size="lg" type='submit' onClick={handleFormSubmit}
    disabled = {state.firstname && state.displayname && state.workspacename && state.usefor ? false : true}
    >
        Create Eden
      </Button>
    </>
  )
}

export default FormOnbord