import '../styles/components/Menu.css';

import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <div className="menuContainer">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre mim</Link>
          </li>
          <li>
            <Link to="/experiencia">Experiencia</Link>
          </li>
          <li>
            <Link to="/portifolio">Portifolio</Link>
          </li>
          <li>
            <Link to="/contato">Fale Comigo</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
