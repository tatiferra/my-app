import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, MyButton} from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Registro from './Registro';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainApp() {
  const [isLogin, setIsLogin] = React.useState(false);
  const [usuario, setUsuario] = React.useState({
    usuario: "Luis",
    logueado: false
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App usuario={usuario} isLogin={isLogin} setIsLogin={setIsLogin}/>} /> {/* Route for the main App component */}
        <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} /> {/* Route for the Login component unraf */}
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <React.StrictMode>
    <MainApp/>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
