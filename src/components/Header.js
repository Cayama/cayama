import React from 'react';
import Nav from './Nav'
import Searcher from './Searcher';

class Header extends React.Component {
  render() {
    const { arrCategories } = this.props;
    return (
      <header>
        <div className="img-searcher">
          <div className="link-logo">
            <a href="globo.com">
              <img src={require("../Logos/logo 1.png")} alt="brandLogo" width="30%"/>
            </a>
          </div>
          <Searcher />
          <ul>
            <li>
              <a className="createAcc" href="google.com.br">Crie sua conta</a>
            </li>
            <li>
              <a className="loginButton" href="mercadolivre.com.br">Login</a>
            </li>
          </ul>
        </div>
        <Nav arrCat={arrCategories} />
      </header>
    )
  }
}

export default Header
