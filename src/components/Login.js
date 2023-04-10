import React, { useState } from "react";
import {
  GlobalStyle,
  StyledButton,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
} from "../styled-components/Form.styled";
import { NavbarLink } from "../styled-components/Navbar.styled";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LOGIN_URL = process.env.REACT_APP_LOGIN_URL;

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch(`${LOGIN_URL}` + email)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (Object.keys(data).length === 0) {
            alert("Please enter registered email!");
          } else {
            if (data.password === password) {
              navigate("/");
            } else {
              alert("please type the correct password!");
            }
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      alert("Please enter an email");
    }
    if (password === "" || password === null) {
      result = false;
      alert("Please enter an password");
    }
    return result;
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleLogin}>
          <h1>Login</h1>
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
          <StyledButton type="submit">Login</StyledButton>
          <div>
            <p>Don't have an account?</p>
            <NavbarLink to={"/register"}>Register</NavbarLink>
          </div>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default Login;
