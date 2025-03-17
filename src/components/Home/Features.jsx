import React from "react";
import './Feature.css';
import { useEffect } from "react";
import AOS from "aos";

const Features=()=>{
    useEffect(() => {
            AOS.init({
              duration: 2000
            });
          }, []);
    return(
        <div className="features">
            <div className="featuresHeading">
                <p data-aos="fade-up">Our Featured Projects</p>
            </div>
            <div className="featuresContent">
                <div className="featuresItem">
                      <img loading="lazy" src="https://res.cloudinary.com/dbohtvj14/image/upload/v1742196817/logo_1_mrabzs.png" alt="" data-aos="fade-up-right"/>
                    <p data-aos="fade-up-right"><span>1.</span> AIPL DREAMCITY LUDHIANA</p>
                </div>
                <div className="featuresItem">
                      <img loading="lazy" src="https://res.cloudinary.com/dbohtvj14/image/upload/v1742196817/logo-umbera-orchard_oodfhg.png" alt="" data-aos="fade-up" className="img2"/>
                    <p data-aos="fade-up"><span>2.</span> UMBERA ORCHARD</p>
                </div>
                <div className="featuresItem" data-aos="fade-up-left">
                      <img loading="lazy" src="https://res.cloudinary.com/dbohtvj14/image/upload/v1742196817/logo1_go55l6.png" alt="" data-aos="fade-up-left" className="img3"/>
                    <p data-aos="fade-up-left"><span>3.</span> RAJGADH ESTATE</p>
                </div>
            </div>
        </div>
    )
}

export default Features;