import '../styles/pages/Home.css';

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="conteudoPaginaContainer">
        <div className="textosPaginaContainer">
          <h1>Bem vindo</h1>
          <p>
            o meu nome é <span>Arthur Maskalenkas</span>
          </p>
          <p>E eu sou um Web Developer!</p>
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
