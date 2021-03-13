import { useState } from 'react';
import '../styles/components/Menu.css';

import { ButtonNeon } from './ButtonNeon';

export function Menu() {
  const [buttonAtual, setButtonAtual] = useState('btn1');

  return (
    <div className="menuContainer">
      <nav>
        <ul>
          <li>
            <ButtonNeon
              link="/"
              txt="home"
              nameButton="btn1"
              nameGlobalButtonAtual={buttonAtual}
              setNameGlobalButtonAtual={setButtonAtual}
            />
          </li>
          <li>
            <ButtonNeon
              link="/sobre"
              txt="sobre mim"
              nameButton="btn2"
              nameGlobalButtonAtual={buttonAtual}
              setNameGlobalButtonAtual={setButtonAtual}
            />
          </li>
          <li>
            <ButtonNeon
              link="/fale"
              txt="fale comigo"
              nameButton="btn3"
              nameGlobalButtonAtual={buttonAtual}
              setNameGlobalButtonAtual={setButtonAtual}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}
