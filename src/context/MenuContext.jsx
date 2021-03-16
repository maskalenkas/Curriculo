import React, { createContext, useState } from 'react';
import P from 'prop-types';

export const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [buttonAtual, setButtonAtual] = useState(0);

  return <MenuContext.Provider value={{ buttonAtual, setButtonAtual }}>{children}</MenuContext.Provider>;
}

MenuProvider.propTypes = {
  children: P.any.isRequired,
};

// Os componentes vão enxergar tudo que esta dentro do value do provider
