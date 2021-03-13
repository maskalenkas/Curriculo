import '../styles/components/ButtonNeon.css';
import P from 'prop-types';

import { Link } from 'react-router-dom';

export function ButtonNeon({ link, txt, nameButton, nameGlobalButtonAtual, setNameGlobalButtonAtual }) {
  function toggleButton() {
    setNameGlobalButtonAtual(nameButton);
  }
  return (
    <div className="buttonNeonContainer">
      <Link to={link} onClick={toggleButton} className={`${nameButton == nameGlobalButtonAtual && 'btnClicado'}`}>
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
  nameGlobalButtonAtual: P.string.isRequired,
  setNameGlobalButtonAtual: P.func.isRequired,
};
