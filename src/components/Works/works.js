/* Projects Page, Zeinelabdin Salih, ID:301446462, 02/02/2024 */


import React from 'react';
import './works.css';


const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">"I'm meticulous, ensuring perfection in my work. I'm excited to apply my skills to boost businesses' online success."</span>
            
            <span className="projectFut">Coming Projects</span>
            
            <div className="projectText">
                <div className="Project Bar">
                    <h1> AvatarDance <br /> social media app for interactive avatar videos (Contact me for more details)</h1>
                </div>
            </div>
            <div className="projectText">
                <div className="Project Bar">
                     <h2> NetSal <br /> Social network connecting individuals and businesses within a specific industry or field <br /> (Contact me for more details)</h2>
                </div>
            </div>

            <div className="worksImgs">
                <button className="workBtn">See More</button>
            </div>

                    
        </section>
    );
}

export default Works;