import '../styles/components/IconsSocialMedia.css';

export default function IconsSocialMedia() {
  function redirectWhatsapp() {
    window.location.replace('https://api.whatsapp.com/send?phone=5511976660220&text=Ola%20Arthur!%20Como%20vai?');
  }

  return (
    <div className="iconsSocialMediaContainer">
      <ul>
        <li
          onClick={() => {
            window.location.replace('https://www.facebook.com/arthur.maskalenkas');
          }}
        >
          <a href="">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
        </li>
        <li
          onClick={() => {
            window.location.replace('https://github.com/maskalenkas');
          }}
        >
          <a href="#">
            <i className="fa fa-github-square" aria-hidden="true"></i>
          </a>
        </li>
        <li
          onClick={() => {
            window.location.replace(
              'https://api.whatsapp.com/send?phone=5511976660220&text=Ola%20Arthur!%20Como%20vai?',
            );
          }}
        >
          <a href="#">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
