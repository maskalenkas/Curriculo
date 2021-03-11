import '../styles/pages/Sobre.css';

import { Post } from '../components/Post';

export default function Sobre() {
  return (
    <div className="sobreContainer">
      <div className="biografiaContainer">
        <p>
          O meu nome é Arthur Maskalenkas, tenho 20 anos e atualmente curso o 2º semestre de Análise e Desenvolvimento
          de sistemas na faculdade FMU.
        </p>

        <p>
          Sou um profissional muito dedicado, empenhado e organizado, e em constante evolução. Estou em busca da minha
          primeira oportunidade como desenvolvedor Web
        </p>
      </div>

      {/* Ai vai os cards das tecnologias */}

      <h1> Tecnologias que eu utilizo no dia a dia </h1>
      <div className="postContainer">
        <Post title="JS" img="javascript" body="O coração de tudo! Sem ele, não somos nada." />
        <Post title="React" img="react" body="Meu FrameWork favorito para organizar e otimizar a pagina." />
        <Post title="Css" img="css" body="O que falar dessa ferramenta sensacional? Simplesmente da vida as paginas!" />
        <Post
          title="HTML"
          img="nodejs"
          body="Muito eficiente em permite criar varias aplicações sem que eu saia do conforto do JS!"
        />
      </div>
    </div>
  );
}
