import '../styles/components/CardProjects.css';

import { definirImagem } from '../utils/CardProjects';

import P from 'prop-types';
import { useEffect, useState } from 'react';

export function CardProject({ title, txt, img }) {
  const [imgAtual, setImgAtual] = useState('');

  useEffect(() => {
    const fetchImg = definirImagem(img);
    setImgAtual(fetchImg);
  }, [img]);

  return (
    <div className="cardProjectsContainer">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${imgAtual})`,
        }}
      ></div>

      <div className="card-text">
        <h2>{title}</h2>
        <p>{txt}</p>
      </div>
      <div className="card-stats"></div>
    </div>
  );
}

CardProject.propTypes = {
  title: P.string.isRequired,
  txt: P.string.isRequired,
  img: P.string.isRequired,
};
