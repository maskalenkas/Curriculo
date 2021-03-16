import '../styles/pages/Fale.css';

import { Link } from 'react-router-dom';

import { ContactForm } from '../components/ContactForm';

export default function Fale() {
  return (
    <div className="overlay">
      <div className="faleContainer">
        <header> Entre em contato comigo! </header>
        <p>Coloque o seu Email e a mensagem, e assim que possivel eu responderei!</p>
        <button>
          <Link to="/">x</Link>
        </button>
        <ContactForm />
      </div>
    </div>
  );
}
