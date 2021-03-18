import '../styles/components/Post.css';
import P from 'prop-types';
import { useEffect, useState } from 'react';

export function Post({ title, img, body }) {
  const [imgAtual, setImgAtual] = useState();

  useEffect(() => {
    setImgAtual(`/img/icons/${img}.png`);
  }, [img]);

  return (
    <div className="cardTecnologiasContainer">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img src={imgAtual} alt="" />
            <h3>{title}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{body}</p>
            {/* Espaço para link */}
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
