import logo from './logo.svg';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function MyButton({textoBoton}) {
  return (
    <button>{textoBoton}</button>
  );
}

function MyButtonMUI({textoBoton, colorBoton}) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/registro');
  }

  return(
    <Button variant="contained" color={colorBoton} onClick={handleLoginClick}>{textoBoton}</Button>
  );
}

function App({usuario, isLogin, setIsLogin}) {



  return (
    <div className="App">
      <img src="logo192.png"/>
      <h1>Bienvenido a la app de UNRAF!!!</h1>
      <Stack spacing={2} marginLeft={"590px"} direction="row">
        <MyButton textoBoton="Boton 1"/>
        <MyButtonMUI textoBoton="Perfil de Usuario" colorBoton="primary"/>
      </Stack>
      {isLogin?<p>Usuario {usuario.usuario} Logeado</p>:<p>Usuario {usuario.usuario} No Logeado</p>}
    </div>
  );
}

export {App, MyButton, MyButtonMUI};
