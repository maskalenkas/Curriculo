import '../styles/components/IconsSocialMedia.css';

export default function IconsSocialMedia() {
  return (
    <div className="iconsSocialMediaContainer">
      <ul>
        <li>
          <a href="#">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-github-square" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
