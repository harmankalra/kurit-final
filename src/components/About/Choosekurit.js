import React from "react";
import './Choosekurit.css'
import leader from '../../assets/leader.png';
import architect from '../../assets/architect.png';
import guidance from '../../assets/guidance.png';
import growth from '../../assets/growth.png';

const Choosekurit=()=>{
    return(
        <div className="choosekurit" data-aos="zoom-in-down">
            <div className="centertext">
                <p className="centerupper">Invest smart. Grow strong.</p>
                <p className="centerlower">Choose Kurit.</p>
            </div>
            <div className="gridsection">
                <div className="picandtext t1">
                    <img src={leader} alt="" />
                    <p>Expert Portfolio Management</p>
                </div>

                <div className="picandtext t2">
                    <img src={architect} alt="" />
                    <p>Premium Projects</p>
                </div>

                <div className="picandtext t3">
                    <img src={guidance} alt="" />
                    <p>Trusted Guidance</p>
                </div>

                <div className="picandtext t4">
                    <img src={growth} alt="" />
                    <p>Strategic Growth</p>
                </div>
            </div>


            <div className="topleftdiv"></div>

            <div className="toprightdiv"></div>

            <div className="bottomleftdiv"></div>

            <div className="bottomrightdiv"></div>
        </div>
    )
};

export default Choosekurit;