import '../styles/pages/Sobre.css';

import { Post } from '../components/Post';
import { useContext, useEffect } from 'react';

import { MenuContext } from '../context/MenuContext';

export default function Sobre() {
  const { buttonAtual, setButtonAtual } = useContext(MenuContext);

  useEffect(() => {
    setButtonAtual('btn2');
  }, [setButtonAtual]);

  return (
    <div className="sobreContainer">
      <div className="biografiaContainer">
        <p>
          O meu nome é Arthur Maskalenkas, tenho 20 anos e atualmente curso o 2º semestre de Análise e Desenvolvimento
          de sistemas na faculdade FMU.
        </p>

        <p>
          Sou uma pessoa muito dedicada, empenhada e organizada, e em constante evolução. Estou em busca da minha
          primeira oportunidade como desenvolvedor.
        </p>
        <h1> Tecnologias que eu utilizo no dia a dia </h1>
      </div>

      {/* Ai vai os cards das tecnologias */}

      {/* COloca nextjs e typescript */}
      <div className="postContainer">
        <Post title="JS" img="javascript" body="O coração de tudo! Sem ele, não somos nada." />
      </div>
    </div>
  );
}
