import '../styles/components/IconsSocialMedia.css';

export default function IconsSocialMedia() {
  function redirectWhatsapp() {
    window.location.replace('https://api.whatsapp.com/send?phone=5511976660220&text=Ola%20Arthur!%20Como%20vai?');
  }

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
        <li onClick={redirectWhatsapp}>
          <a href="#">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
