import LogoDesktop from "../../assets/img/logo-rimac-white-desktop.png";
import LogoMovil from "../../assets/img/logo-rimac-white-movil.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="container-footer">
      <img
        src={LogoMovil}
        alt="img-logo-white-movil"
        className="container-footer__logo-movil"
      />
      <img
        src={LogoDesktop}
        alt="img-logo-white-desktop"
        className="container-footer__logo-desktop"
      />
      <div className="container-footer__separator" />
      <span className="container-footer__description">
        © 2023 RIMAC Seguros y Reaseguros.
      </span>
    </div>
  );
};

export default Footer
