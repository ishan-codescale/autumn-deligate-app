import React from "react";
import {
  GlobalStyle,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledError,
  SharedStyle,
} from "../styled-components/Form.styled";

const Register = () => {
  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <h1>Register</h1>
          <label htmlFor="email">Email</label>
          <StyledInput type="email" name="email" />
          <label htmlFor="password">Password</label>
          <StyledInput type="password" name="password" />
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
