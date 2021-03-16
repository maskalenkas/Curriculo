import '../styles/pages/Fale.css';

import { Link } from 'react-router-dom';

import { ContactForm } from '../components/ContactForm';

export default function Fale() {
  return (
    <div className="overlay">
      <div className="faleContainer">
        <button>
          <Link to="/">X</Link>
        </button>
        <ContactForm />
      </div>
    </div>
  );
}
