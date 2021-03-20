import '../styles/pages/Home.css';

//*
//*  Hamburguer nessa pagina é gambiarra!
//*

import { useContext, useEffect } from 'react';
import { MenuContext } from '../context/MenuContext';

import { Hamburguer } from '../components/Hamburguer';

export default function Home() {
  const { isCelular, setButtonAtual, menuIsOn } = useContext(MenuContext);

  useEffect(() => {
    setButtonAtual('btn1');
  }, [setButtonAtual]);

  return (
    <div className="homeContainer">
      {!menuIsOn && <Hamburguer />}
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
