import { Link } from "react-router-dom"

import Logo from '../../assets/movick-logo.png';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { AiOutlineMenu } from 'react-icons/ai';
import './header.css';
import { useState } from "react";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header>
        <nav>
            <Link to="/"><img src={Logo} alt="Logo" className="logo" /></Link>
            <AiOutlineMenu size={26} className="mobile-menu-icon" onClick={showSidebar} />
            <div className={sidebar ? 'nav-list active' : 'nav-list'}>
              <ul className="principal-nav">
                  <li>
                    <Link to="/">Filmes</Link>
                  </li>
                  <li>
                    <Link to="/mylist">Minha lista</Link>
                  </li>
              </ul>
              <ul className="social-medias">
                <li><a href="https://github.com/ma-vick" target="blank"><SiGithub size={26}/></a></li>
                <li><a href="https://twitter.com/ma__vick" target="blank"><SiTwitter size={26}/></a></li>
              </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header