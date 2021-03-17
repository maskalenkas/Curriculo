import '../styles/components/Post.css';
import P from 'prop-types';

export function Post({ title, img, body }) {
  return (
    <div className="cardTecnologiasContainer">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img src="/img/icons/javascript.png" alt="" />
            <h3>Data</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>Texto da imagem</p>
            <a href="#">Veja mais</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: P.string.isRequired,
  img: P.string.isRequired,
  body: P.string.isRequired,
};
