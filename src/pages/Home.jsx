import '../styles/pages/Home.css';

import { useContext, useEffect } from 'react';
import { MenuContext } from '../context/MenuContext';

export default function Home() {
  const { buttonAtual, setButtonAtual } = useContext(MenuContext);

  useEffect(() => {
    setButtonAtual('btn1');
  }, [setButtonAtual]);

  return (
    <div className="homeContainer">
      <div className="conteudoPaginaContainer">
        <div className="textosPaginaContainer">
          <h1>Bem vindo</h1>
          <p>
            o meu nome é <span>Arthur Maskalenkas</span>
          </p>
          <p>
            E eu sou um <span>Web Developer</span>!
          </p>
        </div>
      </div>

      {/* Efeitos atras */}
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

{
  /* <div className="textoContainer">
<h1>Seja bem vindo!</h1>
<h2> Meu nome é Arthur Maskalenkas</h2>
<h2>E hoje vou apresentar um pouco do meu trabalho como Web Developer!</h2>
</div> */
}
