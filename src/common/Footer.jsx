import React from "react";
import './Footer.css';

const footerimg = 'https://res.cloudinary.com/dznnm9b1j/image/upload/v1740460068/footerimg_ezvvz3.png';
const Kurit = 'https://res.cloudinary.com/dznnm9b1j/image/upload/v1740460027/KuritIcon_xh0dal.png';


const Footer=()=>{
    return(
    <div className="completeFooter">    
        {/* Footer For Desktop View */}
        <div className="footer">
            <div className="footerUpper">

                <div className="footerLeft">
                    <div className="footerKuritImg">
                        <img src={Kurit} alt="" />
                    </div>
                    <div className="footerNavLinks">
                        <a href="/"><span>Home</span></a>
                        <a href="/about"><span>About</span></a>
                        <a href="/contact"><span>Contact</span></a>
                    </div>
                    <div className="footerSocialLinks">
                        <a href="https://www.instagram.com/kurit.in/" target="blank"><span>Instagram</span></a>
                        <a href="https://www.youtube.com/@KuritRealEstateExperts" target="blank"><span>Youtube</span></a>
                        <a href="https://www.facebook.com/kuritrealestateexperts" target="blank"><span>Facebook</span></a>
                    </div>
                    <div className="footerContent">
                        <div className="footerC">
                            <p className="fh">Address</p>
                            <p className="fp">Scf-61, Downtown, BRS Nagar, Ludhiana - 141001, Punjab INDIA</p>
                        </div>

                        <div className="footerC">
                            <p className="fh">Email</p>
                            <p className="fp">yuktam@kurit.in</p>
                        </div>

                        <div className="navbarC">
                            <div className="contactU">
                                <p>Contact Us</p>
                            </div>
                            <div className="navbarContactN">
                                <p>+91 95177 77992</p>
                                <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fRightImg">
                    <img src={footerimg} alt="" />
                </div>
            </div>
        </div>
        {/* New Footer For Mobile View */}
        <div className="footerMobile">
            <div className="innerwhite">
                <div className="innerUpper">
                    <div className="innerimg">
                        <img src={Kurit} alt="" />
                    </div>

                    <div className="navbarCm">
                        <div className="contactUm">
                            <p>Contact Us</p>
                        </div>
                        <div className="navbarContactNm">
                            <p>+91 95177 77992</p>
                            <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="innermiddle">
                    <div className="navlinks">
                        <a href="/"><span>Home</span></a>
                        <a href="/about"><span>About</span></a>
                        <a href="/contact"><span>Contact</span></a>
                    </div>
                    <div className="addressspace">
                        <p className="fh">Address</p>
                        <p className="fp">Scf-61, Downtown, BRS Nagar, Ludhiana - 141001, Punjab INDIA</p>
                    </div>
                </div>

                <div className="innerlower">
                    <div className="sm">
                        <a href="https://www.instagram.com/kurit.in/" target="blank"><span>Instagram</span></a>
                        <a href="https://www.youtube.com/@KuritRealEstateExperts" target="blank"><span>Youtube</span></a>
                        <a href="https://www.facebook.com/kuritrealestateexperts" target="blank"><span>Facebook</span></a>
                    </div>

                    <div className="emailspace">
                        <p className="fh">Email</p>
                        <p className="fp">yuktam@kurit.in</p>
                    </div>
                </div>
                <div className="innerimg2">
                    {/* <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740556225/joel-filipe-RFDP7_80v5A-unsplash_2_1_agrtr6.png" alt="" /> */}
                </div>
            </div>
        </div>
        {/* Upto Here */}
        <div className="footerLower">
            <div className="footerFirst">
                <p>Copyright by Kurit 25-2026</p>
            </div>
            <div className="footerSecond">
                <p>Designed & Developed by PITAMAAS</p>
            </div>
        </div>
    </div>
    ) 
}

export default Footer;