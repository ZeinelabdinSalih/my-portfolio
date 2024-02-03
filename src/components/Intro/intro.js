// About Me Page , Zeinelabdin Salih, ID:301446462, 02/02/2024

import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import resume from '../../assets/MyResume.pdf';
// import btnImg from '../../assets/imageBtn.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className ="introContent">
                {/* <span className="hello">Hello,</span> */}
                <span className="Introtext">I`m <span className="introName">ZEINELABDIN SALIH</span> <br /> AI / SOFTWARE DEVELOPER / DATA SCIENTIST </span>
                <p className="introPara">Briefly:  {'\t'}<br />I possess a stellar background in data science and computer engineering, 
                coupled with an impressive command of R, Python, Tableau, SAS, Cloud, and SQL. 
                My extensive seven-year tenure in the realm of sales and marketing has seen me master the art of expanding 
                client databases and spearheading teams to optimize operational efficiency. My insatiable enthusiasm for technology 
                and automation fuels my continuous quest for knowledge, and I am currently honing my expertise in AI-Software Engineering, 
                skillfully adding Java, JavaScript, React, HTML, and CSS to my ever-expanding toolkit. This unique fusion of technical 
                prowess and business acumen positions me as an invaluable asset, capable of effortlessly transforming data into actionable 
                insights and seamlessly bridging the divide between cutting-edge technology and real-world business applications.</p>
                {/* <Link><button className="btn"><img src={btnImg} alt="More" className="btnImg"/></button></Link> */}
                {/* <Link><button className="btn"><img src={btnImg} alt="Hire "/>Know More</button></Link> */}

                <a href={resume} download="Resume">
                <button className="resumeBtn">Resume</button>
                </a>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;