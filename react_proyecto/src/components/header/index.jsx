import './header.css';
import blanco from "../../assets/image/blanco.png"
import { NavLink } from 'react-router-dom';


function Header() {
    return <header className="hd-ft">
      <img className="hd-ft__logo" src={blanco} alt="logotipo" />
      <nav className="hd-ft__nav">
        <ul className="hd-ft__ul">
        {/* <a  href="">Adopta</a> */}
          
          <li><NavLink to="./adopta" className="link">Adopta</NavLink></li>
          <li><a className="link responsive" href="">Nosotros</a></li>
          <li><a className="link" href="">Tienda</a></li>
          <li><a className="link responsive" href="">Consultas</a></li>
          <li><a className="link" href="">Blog</a></li>
        </ul>
      </nav>
      <div className="container__btn">
        <button className="btn btn-donar" type="button">Donar</button>
        <button className="btn btn-login" type="button">Iniciar sesión</button>
      </div>
    </header>;
  }

export default Header ;