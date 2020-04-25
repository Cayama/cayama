import React from 'react';
import Nav from './Nav'
import Searcher from './Searcher';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src="logo" alt="brandLogo"/>
        <ul>
          <li>
            <a className="createAcc" href="google.com.br">Crie sua conta</a>
          </li>
          <li>
            <a className="loginButton" href="google.com.br">Login</a>
          </li>
        </ul>
        <Nav />
        <Searcher />
      </header>
    )
  }
}

export default Header
