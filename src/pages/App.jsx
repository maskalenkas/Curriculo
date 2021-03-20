import '../styles/pages/App.css';
import React, { useContext, useEffect } from 'react';

import { MenuContext } from '../context/MenuContext';

import { Menu } from '../components/Menu';
import { Profile } from '../components/Profile';
import { Conteudo } from '../components/Conteudo';
import { Hamburguer } from '../components/Hamburguer';

import { BrowserRouter as Router } from 'react-router-dom';
import IconsSocialMedia from '../components/IconsSocialMedia';

function App() {
  console.log(window.screen.width);
  console.log(window.screen.height);

  const { setIsCelular, isCelular, menuIsOn, setMenuIsOn } = useContext(MenuContext);

  // Definindo que é tela de celular
  useEffect(() => {
    window.screen.width < 600 && setIsCelular(true);
  }, [setIsCelular]);

  return (
    <Router>
      {/* Removendo o menu esquerdo caso ele esteja como off */}
      <div className={`${menuIsOn ? 'container' : ''}`}>
        {/* Left */}
        <aside className={`${menuIsOn && 'menuIsOn'}`}>
          {isCelular && menuIsOn ? (
            <>
              {isCelular && <Hamburguer />}
              <Profile />
              <Menu />
              <IconsSocialMedia />
            </>
          ) : (
            <>
              <Profile />
              <Menu />
              <IconsSocialMedia />
            </>
          )}
        </aside>

        {/* Right */}
        <main>
          <Conteudo />
        </main>
      </div>
    </Router>
  );
}

export default App;
