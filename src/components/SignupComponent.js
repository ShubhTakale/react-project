import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

const Signup = (props) => {
  const {
    onSubmitHandler,
    handlePassswordChange,
    handleEmailChange,
    handleFullNameChange,
    handleUserNameChange,
    handleTypeChange,
    handleAcceptedTermsChange,
    email,
    fullName,
    password,
    userName,
    acceptedTerms,
    emailError,
    passwordError,
    fullNameError,
    userNameError,
    acceptedTermsError,
  } = props;
  return (
    <div className="border flex">
      <Form onSubmit={onSubmitHandler}>
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
          <Label>Fullname</Label>
          <Input
            invalid={fullNameError !== ""}
            type="text"
            name="fullname"
            placeholder="with a placeholder"
            value={fullName}
            onChange={handleFullNameChange}
          />
          <FormFeedback>{fullNameError}</FormFeedback>
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
            onChange={handlePassswordChange}
          />
          <FormFeedback>{passwordError}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Username</Label>
          <Input
            invalid={userNameError !== ""}
            type="text"
            name="text"
            placeholder="username placeholder"
            id="exampleText"
            value={userName}
            onChange={handleUserNameChange}
          />
          <FormFeedback>{userNameError}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select Type</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={handleTypeChange}
          >
            <option defaultValue>Public</option>
            <option>Private</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label check>
            <Input
              invalid={acceptedTermsError !== true}
              type="checkbox"
              value={acceptedTerms}
              onChange={handleAcceptedTermsChange}
            />{" "}
            Accepted Terms
          </Label>
          <FormFeedback>{acceptedTermsError}</FormFeedback>
        </FormGroup>
        <FormGroup className="mt-2">
          <Button type="submit">Signup</Button>
        </FormGroup>
        Have an account? <Link to="/login">Login</Link>
      </Form>
    </div>
  );
};

export default Signup;
