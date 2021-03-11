import '../styles/components/RedesSociais.css';

export function RedesSociais() {
  return (
    <div className="redesSociaisContainer">
      <span>
        <i className={`fab fa-linkedin iconLinkedin`}></i>
      </span>
      <span>
        <i className={`fab fab fa-facebook iconFacebook`}></i>
      </span>
      <span>
        <i className={`fab fa-github iconGitHub`}></i>
      </span>
    </div>
  );
}
