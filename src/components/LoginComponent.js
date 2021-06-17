import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function LoginComponent(props) {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    email,
    password,
    emailError,
    passwordError,
  } = props;
  return (
    <div className="border flex">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            invalid={emailError !== ""}
            type="text"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
            value={email}
            onChange={handleEmailChange}
          />
          <FormFeedback>{emailError}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            invalid={passwordError !== ""}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
            value={password}
            onChange={handlePasswordChange}
          />
          <FormFeedback>{passwordError}</FormFeedback>
        </FormGroup>
        <FormGroup className="mt-2">
          <Button type="submit">Login</Button>
        </FormGroup>
        Don't have an account? <Link to="/signup">Signup Here</Link>
      </Form>
    </div>
  );
}

export default LoginComponent;
