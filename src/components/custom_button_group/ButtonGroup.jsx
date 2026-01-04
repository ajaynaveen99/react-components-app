import Input from "../custom_button_group/Input";
import Button from "../custom_button_group/Button";
import './Button.css';
import { useState } from "react";

export default function ButtonGroup() {

       const [name, setName] = useState("");
  return (
       <div>

      <Button
        className="custom-btn btn-primary"
        onClick={() => alert("Primary button clicked")}
      >
        Primary
      </Button>

      <Button
        className="custom-btn btn-success"
        onClick={() => alert("Success button clicked")}
      >
        Success
      </Button>

      <Button
        className="custom-btn btn-danger"
        onClick={() => alert("Danger button clicked")}
      >
        Danger
      </Button>

      <Button
        className="custom-btn btn-warning"
        onClick={() => alert("Warning button clicked")}
      >
        Warning
      </Button>

      <Button
        className="custom-btn btn-dark"
        onClick={() => alert("Dark button clicked")}
      >
        Dark
      </Button>
      <Button className="custom-btn btn-secondary" onClick={() => alert("Secondary button clicked")}>
        Secondary
      </Button>
      <Button className="custom-btn btn-info" onClick={() => alert("Info button clicked")}>
        Info
      </Button>
      <Button className="custom-btn btn-light" onClick={() => alert("Light button clicked")}>
        Light
      </Button>
      <br />


       <h2>Simple Custom Input</h2>

      <Input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Typed value: {name}</p>
      </div>
  )
}
