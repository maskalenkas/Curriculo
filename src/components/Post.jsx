import '../styles/components/Post.css';
import P from 'prop-types';

export function Post({ title, img, body }) {
  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <img src={`img/icons/${img}.png`} alt="" />
          <h3>{title}</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>
            <strong>{body}</strong>
          </p>
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
