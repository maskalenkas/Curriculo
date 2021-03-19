import '../styles/pages/App.css';
import React, { useContext, useEffect } from 'react';

import { MenuContext } from '../context/MenuContext';

import { Menu } from '../components/Menu';
import { Profile } from '../components/Profile';
import { Conteudo } from '../components/Conteudo';

import { BrowserRouter as Router } from 'react-router-dom';
import IconsSocialMedia from '../components/IconsSocialMedia';

function App() {
  console.log(window.screen.width);
  console.log(window.screen.height);

  const { setIsCelular } = useContext(MenuContext);

  // Definindo que é tela de celular
  useEffect(() => {
    window.screen.width < 600 && setIsCelular(true);
  }, [setIsCelular]);

  return (
    <Router>
      <div className="container">
        {/* Left */}
        <aside>
          <Profile />
          <Menu />
          <IconsSocialMedia />
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
