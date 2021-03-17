import '../styles/components/ContactForm.css';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm('xdopqbzb');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="contactContainer">
      <h1>Entre em contato comigo!</h1>
      <form action="/" className="contact-form">
        <input type="text" className="contact-form-text" placeholder=" Seu nome" />
        <input type="text" className="contact-form-text" placeholder="Seu Email" />
        <input type="text" className="contact-form-text" placeholder="Seu celular" />
        <textarea className="contact-form-text" placeholder="Sua mensagem"></textarea>
        <input type="submit" className="contact-form-btn" value="Enviar" />
        <button>
          <a href="/">X</a>
        </button>
      </form>
    </div>
  );
}
