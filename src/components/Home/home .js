// Home Page , Zeinelabdin Salih, ID:301446462, 02/02/2024  */


import React from "react";
import './home.css';
// import bg from '../../assets/image.png';
import btnImg from '../../assets/imageBtn.png';
import { Link } from 'react-scroll';


const home = () => {
    return (
        <section id="home">
            <div className ="homeContent">
                <span className="hello">Hello,</span>
                <span className="hometext">I`m <span className="homeName">ZEIN SALIH</span> <br /> AI / SOFTWARE DEVELOPER </span>
                <p className="homePara">WELCOME! HAPPY TO SERVE; LET US ELEVATE TOGETHER TO UPPER LEVEL.<br /> THE SKY IS OUR LIMIT.</p>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}>
                    <button className="btn">
                    <img src={btnImg} alt="More" className="btnImg"/></button>
                </Link>

            </div>
            {/* <img src={bg} alt="Profile" className="bg"/> */}
        </section>
    )
}

export default home;