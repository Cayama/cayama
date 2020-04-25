import React from 'react';
import Nav from './Nav'
import Searcher from './Searcher';

class Header extends React.Component {
  render() {
    const { arrCategories } = this.props;
    return (
      <header>
        <img src="logo" alt="brandLogo"/>
        <ul>
          <li>
            <a className="createAcc" href="google.com.br">Crie sua conta</a>
          </li>
          <li>
            <a className="loginButton" href="mercadolivre.com.br">Login</a>
          </li>
        </ul>
        <Nav arrCat={arrCategories} />
        <Searcher />
      </header>
    )
  }
}

export default Header
