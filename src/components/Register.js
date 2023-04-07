import React, { useState } from "react";
import {
  GlobalStyle,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledError,
} from "../styled-components/Form.styled";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const REGISTER_URL = process.env.REACT_APP_REGISTER_URL;

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    if (!email || !password) {
      alert("Please provide email and password");
    } else {
      fetch(`${REGISTER_URL}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      }).then(() => {
        alert("New user has registered");
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h1>Register</h1>
          <label htmlFor="email">Email</label>
          <StyledInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <StyledInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
          />
          <StyledError>
            <p>Error</p>
          </StyledError>
          <StyledButton type="submit">Register</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default Register;
