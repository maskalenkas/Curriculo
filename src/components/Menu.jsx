import { useState, useContext } from 'react';
import '../styles/components/Menu.css';

import { ButtonNeon } from './ButtonNeon';

export function Menu() {
  return (
    <div className="menuContainer">
      <nav>
        <ul>
          <li>
            <ButtonNeon link="/" txt="home" nameButton="btn1" />
          </li>
          <li>
            <ButtonNeon link="/sobre" txt="sobre mim" nameButton="btn2" />
          </li>
          <li>
            <ButtonNeon link="/fale" txt="fale comigo" nameButton="btn3" />
          </li>
          <li>
            <ButtonNeon link="/portfolio" txt="Portfólio" nameButton="btn4" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
