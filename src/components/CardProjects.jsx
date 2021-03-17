import '../styles/components/CardProjects.css';

export function CardProject() {
  return (
    <div className="cardProjectsContainer">
      <div className="card-image"></div>
      <div className="card-text">
        <h2>Post one</h2>
        <p>Texto</p>
      </div>
      <div className="card-stats"></div>
    </div>
  );
}
