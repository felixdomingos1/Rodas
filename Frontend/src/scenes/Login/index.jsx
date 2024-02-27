import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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


// Estilos dos componentes omitidos para brevidade...

const LoginForm = ({ setIsAuthenticated }) => {
  const navigate = useNavigate(); // Usando useNavigate para obter a função de navegação
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3334/secretario/auth/', loginData);
      const secretarioId = response.data.secretarioId; 
      setIsAuthenticated(true);
      navigate(`/dashboard/${secretarioId}`);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
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