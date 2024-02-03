// Services Page, Zeinelabdin Salih, ID:301446462, 02/02/2024

import React from 'react';
import './services.css';


const Services = () => {
    return (
        <section id='services'>
                <div className="servicesBars">
                    <div className="servicesBars">
                         <div className="servicesBar">
                            {/* <img src="WebDev" alt="WebDev" href="../../assets/webdev.png className=" className="servicesBarImg" /> */}
                            <div className="servicesBarText">
                                <h2>Web Development</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="servicesBars">
                    <div className="servicesBars">
                        <div className="servicesBar">
                            {/* <img src="AppDev" alt="AppDev" className="servicesBarImg" /> */}
                            <div className="servicesBarText">
                                <h2>Mobelie Apps Devlopemnt</h2>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="servicesBars">
                    <div className="servicesBars">
                        <div className="servicesBar">
                            {/* <img src="DataAnalytics" alt="DataAnalytics" className="servicesBarImg" /> */}
                            <div className="servicesBarText">
                                <h2>Data Analytics</h2>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}
export default Services;
