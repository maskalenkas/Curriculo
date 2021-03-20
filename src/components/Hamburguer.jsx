import '../styles/components/Hamburguer.css';

import { MenuContext } from '../context/MenuContext';
import { useContext } from 'react';

export function Hamburguer() {
  const { menuIsOn, setMenuIsOn } = useContext(MenuContext);

  function handleButton() {
    setMenuIsOn(!menuIsOn);
  }

  return (
    <div>
      {!menuIsOn ? (
        <div className="hamburguerContainer" onClick={handleButton}>
          <p>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </p>
        </div>
      ) : (
        <div className="hamburguerContainerDesativado" onClick={handleButton}>
          <i className="fa fa-arrow-left" aria-hidden="true">
            Menu
          </i>
        </div>
      )}
    </div>
  );
}
