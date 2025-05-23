import React from "react";
import './Footer.css';

const footerimg = 'https://res.cloudinary.com/dbohtvj14/image/upload/v1742195083/footerimg_sotzi7.png';
const Kurit = 'https://res.cloudinary.com/dbohtvj14/image/upload/v1742195084/KuritIcon_p4ys2b.png';


const Footer=()=>{
    return(
    <div className="completeFooter">    
        {/* Footer For Desktop View */}
        <div className="footer">
            <div className="footerUpper">

                <div className="footerLeft">
                    <div className="footerKuritImg">
                          <img loading="lazy" src={Kurit} alt="" />
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
    <p className="fp">
        <a href="mailto:yuktam@kurit.in" style={{ textDecoration: 'none', color: 'inherit' }}>
            yuktam@kurit.in
        </a>
    </p>
</div>

                        <div className="navbarC">
                        <a href="tel:+919517777992">
                            <div className="contactU">
                                <p>Contact Us</p>
                            </div>
                            <div className="navbarContactN">
                           
                            <p>+91 95177 77992</p>
                                  <img loading="lazy" src="https://res.cloudinary.com/dbohtvj14/image/upload/v1742196155/Group_15_kje7pw.png" alt="" />
                            </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="fRightImg">
                      <img loading="lazy" src={footerimg} alt="" />
                </div>
            </div>
        </div>
        {/* New Footer For Mobile View */}
        <div className="footerMobile">
            <div className="innerwhite">
                <div className="innerUpper">
                    <div className="innerimg">
                          <img loading="lazy" src={Kurit} alt="" />
                    </div>
                    <div className="navbarCm">
                        <div className="contactUm">
                   
                            <p>Contact Us</p>
                        </div>
                         <a href="tel:+919517777992">
                        <div className="navbarContactNm">
                            <p>+91 95177 77992</p>
                              <img loading="lazy" src="https://res.cloudinary.com/dbohtvj14/image/upload/v1742196155/Group_15_kje7pw.png" alt="" />
                        </div>
                    </a>
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
    <p className="fp">
        <a href="mailto:yuktam@kurit.in" style={{ textDecoration: 'none', color: 'inherit' }}>
            yuktam@kurit.in
        </a>
    </p>
</div>

                </div>
                <div className="innerimg2">
                    {/*   <img loading="lazy" src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740556225/joel-filipe-RFDP7_80v5A-unsplash_2_1_agrtr6.png" alt="" /> */}
                </div>
            </div>
        </div>
        {/* Upto Here */}
        <div className="footerLower">
            <div className="footerFirst">
                <p>Copyright by Kurit 25-2026</p>
            </div>
            <div className="footerSecond">
                <p>Designed & Developed by  <a href="https://www.pitamaas.com" target="blank" style={{ display: 'inline',color:'#000' }}>PITAMAAS</a></p>
            </div>
        </div>
    </div>
    ) 
}

export default Footer;