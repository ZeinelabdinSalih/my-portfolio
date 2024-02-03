/* Navigatoion Bar , Zeinelabdin Salih, ID:301446462, 02/02/2024 */

import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About Me</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to='services' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Services</Link>

            </div>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}>
                <button className="desktopMenuBtn">
                 <img src={contactImg} alt="" className="desktopMenuImg" /></button>
            </Link>
        </nav>
    )
}

export default NavBar;