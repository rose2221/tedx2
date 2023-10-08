import React from 'react';
import './navbar.css';
import logo from '../../assets/Screenshot__297_-removebg-preview.png';
import { Link } from 'react-scroll';
import dropdown from '../../assets/white-menu-icon-4.jpg';
import  { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return ( 
        <nav className = "navbar" >

        <img src = { logo } alt = "logo" className = 'logo'/>
        <div className = "desktopmenu" > 
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenulist">Home</Link>
<Link activeClass='active' to='faq' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenulist">FAQs</Link>


<Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenulist">About</Link>
<Link activeClass='active' to='form' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenulist">Contact</Link>
</div>
 <img src={dropdown} alt="Menu" className="mobMenu" onClick={()=> setShowMenu(!showMenu)}/> 
 <div className = "navmenu" style={{display: showMenu? 'flex': 'none'}} > 
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listi" onClick={()=> setShowMenu(false)}>Home</Link>
<Link activeClass='active' to='faq' spy={true} smooth={true} offset={-100} duration={500} className="listi" onClick={()=> setShowMenu(false)}>FAQs</Link>
<Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listi" onClick={()=> setShowMenu(false)}>About</Link>
<Link activeClass='active' to='form' spy={true} smooth={true} offset={-100} duration={500} className="listi" onClick={()=> setShowMenu(false)}>Contact</Link></div>
      
         </nav>
    );
}

export default Navbar;