import '../styles/pages/Portfolio.css';

import { useContext, useEffect } from 'react';
import { MenuContext } from '../context/MenuContext';
export default function Portfolio() {
  const { buttonAtual, setButtonAtual } = useContext(MenuContext);

  useEffect(() => {
    setButtonAtual('btn4');
  }, [setButtonAtual]);
  return <div className="portfolioContainer">oi</div>;
}
