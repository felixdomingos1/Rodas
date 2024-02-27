import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  background-color: #2F4F4F;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  background-color: orange;
  margin-bottom: 1rem;
`;

const StyledTypography = styled(Typography)`
  color: orange;
  font-size:30px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;

  & + & {
    margin-top: 1rem;
  }
`;

const LoginForm = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      onLogin(loginData);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <StyledAvatar>
        <LockOutlinedIcon />
      </StyledAvatar>
      <StyledTypography component="h1" variant="h3">
        Rodas
      </StyledTypography>
      <form onSubmit={handleSubmit}>
        <StyledTextField
          variant="outlined"
          margin="normal"
          required
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={loginData.email}
          onChange={handleChange}
        />
        <StyledTextField
          variant="outlined"
          margin="normal"
          required
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={loginData.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: 'orange', color: 'white' }}
        >
          Login
        </Button>
      </form>
    </StyledContainer>
  );
};

export default LoginForm;