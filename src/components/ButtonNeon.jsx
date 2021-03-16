import '../styles/components/ButtonNeon.css';
import P from 'prop-types';

import { Link } from 'react-router-dom';
import { MenuContext } from '../context/MenuContext';
import { useContext } from 'react';

export function ButtonNeon({ link, txt, nameButton }) {
  const { buttonAtual, setButtonAtual } = useContext(MenuContext);

  function toggleButton() {
    setButtonAtual(nameButton);
  }

  const isButtonAtual = nameButton != buttonAtual ? 'buttonNeonContainer' : 'buttonSelecionadoNeonContainer';

  return (
    <div className={isButtonAtual}>
      <Link to={link} onClick={toggleButton} className={`${nameButton == buttonAtual && 'btnClicado'}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {txt}
      </Link>
    </div>
  );
}

ButtonNeon.propTypes = {
  link: P.string.isRequired,
  txt: P.string.isRequired,
  nameButton: P.string.isRequired,
};
