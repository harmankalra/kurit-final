import React from "react";
import { useLocation } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    const location = useLocation();

    // Define banner images for different pages (Desktop)
    const bannerImages = {
        "/about": "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740831037/Kurit_Banner_2_vbmc2u.png",
        "/contact": "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740829104/Main_Frame_bh4oy4.png",
    };

    // Define banner images for mobile view
    const mobileBannerImages = {
        "/about": "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740831036/Frame_20_cj6v0k.png",
        "/contact": "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740831040/Kurit_Banner_4_aamktk.png",
        "/": "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740552657/Group_14_isgb05.png",
    };

    // Assign a dynamic class for CSS targeting
    const bannerClass = location.pathname === "/about"
        ? "about-banner"
        : location.pathname === "/contact"
        ? "contact-banner"
        : "home-banner";

    return (
        <div 
            className={`banner ${bannerClass}`} 
            style={{
                backgroundImage: `url(${mobileBannerImages[location.pathname] || mobileBannerImages["/"]})`,
            }}
        >
            <img
                src={bannerImages[location.pathname] || "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740564710/baner_y3gu3t.jpg"}
                alt="Banner"
            />
            
            {/* Show banner text only on the home page */}
            {location.pathname === "/" && (
                <div className="bannerText">
                    <p>Maximizing Your Real Estate Portfolio for Smarter Investments!</p>
                </div>
            )}
        </div>
    );
};

export default Banner;
