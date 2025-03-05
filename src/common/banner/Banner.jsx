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

    const defaultDesktopBanner = "https://res.cloudinary.com/dznnm9b1j/image/upload/v1740564710/baner_y3gu3t.jpg";
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
              <img loading="lazy"
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
