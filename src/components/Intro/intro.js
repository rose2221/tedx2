import React from 'react';
import './intro.css';
import logo from '../../assets/Screenshot__297_-removebg-preview.png';
// import { Link } from 'react-scroll';
// import menu from '../../assets/'
import { Link } from 'react-scroll';
import  { useState } from 'react';

const Intro = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <section id="intro">
            <div className="introcontent">
                <img src={logo} alt="logo" className="font" />
                <span className="text">  October 31st, 2023</span>
                <span className="location">Indian Institute of Technology, Roorkee</span>
                {/* <div className="buttons">
                   <Link activeClass='active' to='Form' spy={true} smooth={true} offset={-100} duration={500} ><button onClick={()=> setShowMenu(false)} className="register">Contact</button></Link>  */}
                   
                {/* </div> */}
                  
               
            </div>
        </section>

    )
}

export default Intro;