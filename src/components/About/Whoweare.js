import React from "react";
import './Whoweare.css';
const About = 'https://res.cloudinary.com/dznnm9b1j/image/upload/v1740462539/About_nzb2xe.png'

const Whoweare=()=>{
  return(
    <div className="whoweare">
        <div className="leftsection">
            <h1 data-aos="zoom-in">Who We Are?</h1>
            <p data-aos="zoom-in">At <span>Kurit</span> we specialize in <span>real estate portfolio management,</span> helping investors make informed and profitable property decisions. Our expertise lies in connecting clients in high-value residential and commercial projects that prmoise long-term growth.</p>
            <p data-aos="zoom-in">With a strategic approach and deep market insights, we ensure that every investments is aligned with your financial goals. Whether you are looking for premium plots, luxury townships, or smart real estate investments, <span>Kurit</span> is your trusted partner.</p>

            <div className="navbarCo" data-aos="zoom-in">
            <div className="contactUs">
              <p>Contact Us</p>
            </div>
            <div className="navbarCoNumber">
              <p>+91 95177 77992</p>
              <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png" alt="" />
            </div>
          </div>
        </div>
        <div className="rightsection">
            <img src={About} alt="" data-aos="fade-up"
 data-aos-duration="3000" />
        </div>
    </div>
)
};

export default Whoweare;