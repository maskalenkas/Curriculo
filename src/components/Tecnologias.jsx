import '../styles/components/Tecnologias.css';

export function Tecnologias() {
  return (
    <div className="TecnologiasContainer">
      <h3>Tecnologias</h3>
      <div>
        <span>
          <a>
            <i className={`fab fa-react iconReact`}></i>
          </a>
        </span>
        <span>
          <i className={`fab fab fa-js iconJs`}></i>
        </span>
        <span>
          <i className={`fab fa-node iconNode`}></i>
        </span>
        <span>
          <i className={`fab fa-css3-alt iconCss3`}></i>
        </span>
        <span>
          <i className={`fab fa-html5 iconHtml5`}></i>
        </span>
      </div>
    </div>
  );
}
