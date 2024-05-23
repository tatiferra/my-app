import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Login({isLogin, setIsLogin}) {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        // ... your login logic here (e.g., simulate successful login) ...
        isLogin?setIsLogin(false):setIsLogin(true); // Update estadoLogin in the App component
        alert('Simulando inicio de sesión exitoso'); // Optional feedback
        navigate('/');
      };
    
    return (
        <div className="login-container">
        <h1>Bienvenido al Login</h1>
        <p>Ingrese sus credenciales para acceder.</p>
        <Button variant="contained" color="primary" onClick={handleLoginClick}>
            {!isLogin?'Iniciar sesión':'Cerrar sesión'}
        </Button>
        </div>
    );
}

export default Login;