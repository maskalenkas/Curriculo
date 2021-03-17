import '../styles/pages/Fale.css';

import { Link } from 'react-router-dom';

import { ContactForm } from '../components/ContactForm';

export default function Fale() {
  return (
    <div className="overlay">
      <ContactForm />
    </div>
  );
}
