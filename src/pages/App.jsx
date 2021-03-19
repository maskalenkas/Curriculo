import '../styles/pages/App.css';
import React, { useEffect } from 'react';

import MenuProvider from '../context/MenuContext';

import { Menu } from '../components/Menu';
import { Profile } from '../components/Profile';
import { Conteudo } from '../components/Conteudo';

import { BrowserRouter as Router } from 'react-router-dom';
import IconsSocialMedia from '../components/IconsSocialMedia';

function App() {
  console.log(window.screen.width);
  console.log(window.screen.height);

  useEffect(() => {
    //window.screen.width < 500 &&
  }, []);

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
