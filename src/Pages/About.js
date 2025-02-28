import React from "react";
import Whoweare from "../components/About/Whoweare";
import Choosekurit from "../components/About/Choosekurit";
import Ourproject from "../components/About/Ourprojects";

import Banner from "../common/banner/Banner";



const About=()=>{
    return(
        <div className="About">
            <Banner />
            <Whoweare/>
            <Choosekurit/>
            <Ourproject/>
        </div>
    )
};

export default About;