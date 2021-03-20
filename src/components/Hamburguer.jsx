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
        <div className="hamburguerContainer">
          <p onClick={handleButton}>HAMBURGUER</p>
        </div>
      ) : (
        <div className="hamburguerContainerDesativado" onClick={handleButton}>
          Menu
        </div>
      )}
    </div>
  );
}
