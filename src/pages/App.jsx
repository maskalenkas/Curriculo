import '../styles/pages/App.css';
import React from 'react';

import MenuProvider from '../context/MenuContext';

import { Menu } from '../components/Menu';
import { Profile } from '../components/Profile';
import { Conteudo } from '../components/Conteudo';

import { BrowserRouter as Router } from 'react-router-dom';
import IconsSocialMedia from '../components/IconsSocialMedia';

function App() {
  return (
    <MenuProvider>
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
    </MenuProvider>
  );
}

export default App;
