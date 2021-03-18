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
        <Post title="JS" img="javascript" body="Uso 90% do tempo. Sem ele, não somos nada." />
        <Post title="React" img="react" body="A minha biblioteca favorita para organizar a pagina visualmente." />
        <Post
          title="Css"
          img="css"
          body="O que falar dessa ferramenta sensacional? Simplesmente da vida as minhas paginas!"
        />
        <Post title="HTML" img="nodejs" body="A minha combinação preferida junto a JS." />
        <Post title="GIT" img="git" body="Me permite versionar e organizar o projeto." />
        <Post
          title="NextJS"
          img="nextjs"
          body="Um framework essencial na construção de sites. É com ele que eu vou indexar o seu projeto no Google!"
        />
        <Post title="Typescript" img="typescript" body="É o que eu uso para dar super poderes ao JS." />
        <Post title="MySql" img="mysql" body="É o meu principal banco de dados" />
        <Post title="ESLint" img="eslint" body="Uso muito para deixar o codigo bem organizado e legivel." />
      </div>
    </div>
  );
}
