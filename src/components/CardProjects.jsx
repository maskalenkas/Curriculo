import '../styles/components/CardProjects.css';

import P from 'prop-types';

export function CardProject({ title, txt }) {
  return (
    <div className="cardProjectsContainer">
      <div className="card-image"></div>
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
};
