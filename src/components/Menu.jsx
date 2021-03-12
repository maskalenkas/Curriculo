import '../styles/components/Menu.css';

import { ButtonNeon } from './ButtonNeon';

export function Menu() {
  return (
    <div className="menuContainer">
      <nav>
        <ul>
          <li>
            <ButtonNeon link="/" txt="home" />
          </li>
          <li>
            <ButtonNeon link="/sobre" txt="sobre mim" />
          </li>
          <li>
            <ButtonNeon link="/fale" txt="fale comigo" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
