import '../styles/pages/Portfolio.css';

import { useContext, useEffect } from 'react';
import { MenuContext } from '../context/MenuContext';

import { CardProject } from '../components/CardProjects';
export default function Portfolio() {
  const { buttonAtual, setButtonAtual } = useContext(MenuContext);

  useEffect(() => {
    setButtonAtual('btn4');
  }, [setButtonAtual]);

  return (
    <div className="portfolioContainer">
      <div className="textoContainer">
        <h1>Projetos desenvolvidos</h1>
      </div>
      <div className="projetosContainer">
        <CardProject title="MOVEIT!" txt="Aplicação desenvolvida com React e NextJS pela plataforma Rockseat" />
        <CardProject
          title="Jogo da memoria"
          txt="Aplicação desenvolvida com js html e css puro, visando implementar uma lógica com JS"
        />
      </div>
    </div>
  );
}
