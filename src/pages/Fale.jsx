import '../styles/pages/Fale.css';

import { Link } from 'react-router-dom';

export default function Fale() {
  return (
    <div className="overlay">
      <div className="faleContainer">
        <header> Entre em contato conosco! </header>
        <p>Deseja entrar em contato?</p>
        <button>
          <Link to="/">x</Link>
        </button>
      </div>
    </div>
  );
}
