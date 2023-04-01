import React from "react";
import {
  GlobalStyle,
  StyledButton,
  StyledError,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
} from "../styled-components/Form.styled";

const Login = () => {
  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <StyledInput type="email" name="email" />
          <label htmlFor="password">Password</label>
          <StyledInput type="password" name="password" />
          <StyledError>
            <p>Error</p>
          </StyledError>
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default Login;
