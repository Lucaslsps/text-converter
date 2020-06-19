import React, { useState, useImperativeHandle } from "react";
import "./App.css";
import { Form, Button } from "react-bootstrap";

const App = () => {
  const [selected, setSelected] = useState();

  function handleCheck(event) {
    console.log(event);
    console.log(event.target);
    setSelected(event.target.id);
  }

  return (
    <div className="App">
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            Enter your text and choose from one of the options
          </Form.Label>
          <Form.Control as="textarea" rows="3"></Form.Control>
        </Form.Group>
        <Form.Check
          inline
          label="Sentence case"
          id="1"
          name="textMode"
          onClick={handleCheck}
        />
        <Form.Check
          inline
          label="lower case"
          id="2"
          name="textMode"
          onClick={handleCheck}
        />
        <Form.Check
          inline
          label="UPPER CASE"
          id="3"
          name="textMode"
          onClick={handleCheck}
        />
        <Form.Check
          inline
          label="Capitalized Case"
          id="4"
          name="textMode"
          onClick={handleCheck}
        />
        <Form.Check
          inline
          label="aLtErNaTiNg cAsE"
          id="5"
          name="textMode"
          onClick={handleCheck}
        />
        <Form.Check
          inline
          label="Title Case"
          id="6"
          name="textMode"
          onClick={handleCheck}
        />
        <Form.Check
          inline
          label="InVeRsE CaSe"
          id="7"
          name="textMode"
          onClick={handleCheck}
        />
      </Form>
    </div>
  );
};

export default App;
