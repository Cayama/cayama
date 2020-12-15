import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getUser } from "../../services/API";
import userLogo from "../../assets/images/user-logo.webp";

import "./styles.css";

const inputs = (userValue, setUserValue, type, placeholder) => {
  return (
    <div>
      <label htmlFor={type}>
        <input
          className="input-login"
          type={type}
          onChange={(event) => setUserValue(event.target.value)}
          value={userValue}
          placeholder={placeholder}
        />
        <span></span>
      </label>
    </div>
  );
};

const enterButton = (clickToEnter, isDisabled) => (
  <div>
    <button
      className={isDisabled() ? "signin-btn-disabled" : "signin-btn-enable"}
      onClick={() => clickToEnter()}
      disabled={isDisabled()}
    >
      ENTRAR
    </button>
  </div>
);

const helperButton = (route, write) => (
  <div>
    <Link to={`/${route}`}>{ write }</Link>
  </div>
);

function Login() {
  const [userEmail, setUserEMail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const history = useHistory();

  const clickToEnter = async () => {
    const logedUser = await getUser(userEmail, userPassword);
    if (logedUser.data.role === 'seller') {
      return history.push(`/seller/${logedUser.data.id}`)
    }
    if (logedUser.data.role === 'influencer') {
      return history.push(`/influencer/${logedUser.data.id}`)
    }
    history.push('/stores/');
  };

  const isDisabled = () => {
    const emailTest = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (userPassword.length > 7 && userEmail.match(emailTest)) return false;
    return true;
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="longin-wrap">
          <img src={userLogo} alt="logoUser" />
          <h4>Login</h4>
          {inputs(userEmail, setUserEMail, "email", "Email")}
          {inputs(userPassword, setUserPassword, "password", "Senha")}
          <div className="helper-btn">
            {helperButton("register", "Cadastre-se")}
            {helperButton("recover", "Esqueceu sua senha?")}
          </div>
          {enterButton(clickToEnter, isDisabled)}
        </div>
      </div>
    </div>
  );
}

export default Login;