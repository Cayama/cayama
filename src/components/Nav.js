import React from 'react';
import Categories from './Categories';
import '../App.css';

class Nav extends React.Component {
  render() {
    const { arrCat } = this.props;
    return (
      <nav>
        <ul>
          <li className="dropdown">
            <button className="dropbtn" href="google.com.br">Categorias</button>
            <div className="dropdown-content">
              {arrCat.map(e => <Categories key={e.id} cat={e} />)}
            </div>
          </li>
          <li>
            <a href="google.com.br">Ofertas</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;