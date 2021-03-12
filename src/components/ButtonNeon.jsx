import '../styles/components/ButtonNeon.css';
import P from 'prop-types';

import { Link } from 'react-router-dom';

export function ButtonNeon({ link, txt }) {
  return (
    <div className="buttonNeonContainer">
      <Link to={link}>
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
};
