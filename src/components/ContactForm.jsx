import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm('xdopqbzb');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form action="https://formspree.io/f/xdopqbzb" method="POST">
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <br></br>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
