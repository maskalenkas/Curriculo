import '../styles/components/Hamburguer.css';

import { MenuContext } from '../context/MenuContext';
import { useContext } from 'react';

export function Hamburguer() {
  const { menuIsOn, setMenuIsOn } = useContext(MenuContext);

  function handleButton() {
    setMenuIsOn(!menuIsOn);
    console.log(menuIsOn);
  }

  return (
    <div className="hamburguerContainer">
      <p onClick={handleButton}>oi</p>
    </div>
  );
}
