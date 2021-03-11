import '../styles/pages/App.css';
import React from 'react';

import { Menu } from '../components/Menu';
import { Profile } from '../components/Profile';
import { RedesSociais } from '../components/RedesSociais';
import { Conteudo } from '../components/Conteudo';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        {/* Left */}
        <aside>
          <Profile />
          <Menu />
          <RedesSociais />
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
