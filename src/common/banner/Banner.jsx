import React from "react";
import { useLocation } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    const location = useLocation();

    // Define banner images for different pages (Desktop)
    const bannerImages = {
        "/about": "https://res.cloudinary.com/dbohtvj14/image/upload/v1742195067/Kurit_Banner_2_vbmc2u_xyrphs.png",
        "/contact": "https://res.cloudinary.com/dbohtvj14/image/upload/v1742195066/Main_Frame_bh4oy4_rcpta0.png",
    };

    // Define banner images for mobile view
    const mobileBannerImages = {
        "/about": "https://res.cloudinary.com/dbohtvj14/image/upload/v1742215194/Frame_20_gdtkrn.png",
        "/contact": "https://res.cloudinary.com/dbohtvj14/image/upload/v1742215200/Kurit_Banner_4_a8oswj.png",
        "/": "https://res.cloudinary.com/dbohtvj14/image/upload/v1742195062/Group_14_ov4krm.png",
    };

    const defaultDesktopBanner = "https://res.cloudinary.com/dbohtvj14/image/upload/v1742195066/baner_y3gu3t_p6jocw.jpg";
    const defaultMobileBanner = "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740552657/Group_14_isgb05.png";

    // Assign dynamic class for styling
    const bannerClass = location.pathname === "/about"
        ? "about-banner"
        : location.pathname === "/contact"
        ? "contact-banner"
        : "home-banner";

    return (
        <div
            className={`banner ${bannerClass}`}
            style={{
                backgroundImage: `url(${mobileBannerImages[location.pathname] || defaultMobileBanner})`,
            }}
        >
            {/* Desktop Image (Hidden in Mobile View) */}
              <img 
                src={bannerImages[location.pathname] || defaultDesktopBanner}
                alt="Banner" 
            />

            {/* Show banner text only on home page */}
            {location.pathname === "/" && (
                <div className="bannerText">
                    <p>Maximizing Your Real Estate Portfolio for Smarter Investments!</p>
                </div>
            )}
        </div>
    );
};

export default Banner;
