import React from 'react';
import Categories from './Categories';
import '../App.css';

class Nav extends React.Component {
  render() {
    const { arrCat } = this.props;
    return (
      <nav>
        <ul className="Nav-content">
          <li className="dropdown categorias">
            <span className="dropbtn" href="google.com.br">Categorias</span>
            <div className="dropdown-content">
              {arrCat.map(e => <Categories key={e.id} cat={e} />)}
            </div>
          </li>
          <li>
            <a className="nav-ofertas" href="google.com.br">Ofertas</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;