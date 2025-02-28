import React from "react";
import GetinTouch from "../components/contact/GetinTouch.js";
import FormSection from "../components/contact/FormSection.js";
import Banner from "../common/banner/Banner.jsx";

const Contact=()=>{
    return(
        <div className="About">
            <Banner />
            <GetinTouch/>
            <FormSection/>
        </div>
    )
};

export default Contact;