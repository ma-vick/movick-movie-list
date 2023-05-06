import { Link } from "react-router-dom"

import Logo from '../../assets/movick-logo.png';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './header.css';
import { useState } from "react";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header>
        <nav>
            <div className="nav-items">
            <Link to="/"><img src={Logo} alt="Logo" className="logo" /></Link>
              <ul className="principal-nav">
                    <li>
                      <Link to="/">Filmes</Link>
                    </li>
                    <li>
                      <Link to="/mylist">Minha lista</Link>
                    </li>
                </ul>
            </div>
            <div className="nav-list">
              <ul className="social-medias">
                <li><a href="https://github.com/ma-vick" target="blank"><SiGithub size={26}/></a></li>
                <li><a href="https://twitter.com/ma__vick" target="blank"><SiTwitter size={26}/></a></li>
              </ul>
            </div>
            <AiOutlineMenu size={26} className="mobile-menu-icon" onClick={showSidebar} />
            {
              sidebar &&
                <div className="sidebar-nav-list">
                  <AiOutlineClose size={26} onClick={showSidebar} className="sidebar-close-btn" /> 
                  <ul className="sidebar-principal-nav">
                      <li>
                        <Link to="/">Filmes</Link>
                      </li>
                      <li>
                        <Link to="/mylist">Minha lista</Link>
                      </li>
                  </ul>
                  <ul className="sidebar-social-medias">
                    <li><a href="https://github.com/ma-vick" target="blank"><SiGithub size={26}/></a></li>
                    <li><a href="https://twitter.com/ma__vick" target="blank"><SiTwitter size={26}/></a></li>
                  </ul>
              </div>
            }
        </nav>
    </header>
  )
}

export default Header