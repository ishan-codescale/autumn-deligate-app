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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
