import React from "react";
import './Discover.css';

const Discover=()=>{
    return(
        <div className="discover">
            <div className="discoverHeading" data-aos="fade-right"  data-aos-duration="1500">
                <p className="discoverh">Exclusive Real Estate Opportunities</p>
                <p className="discoverp">Discover Ludhiana's Finest Townships - Handpicked for Smart Investors.</p>
            </div>
            <div className="discoverDetail" data-aos="fade-right"  data-aos-duration="1500">
                <p className="discoverdh">AIPL DreamCity</p>
                <p className="discoverdp">A 500+ acre smart township with a scenic lake and premium amenities</p>
            </div>
            <div className="discoverDetail" data-aos="fade-right"  data-aos-duration="1500">
                <p className="discoverdh">Umbera Orchard</p>
                <p className="discoverdp">A 216-acre luxury estate with lush green spaces and modern infrastructure</p>
            </div>
            <div className="discoverDetail" data-aos="fade-right"  data-aos-duration="1500">
                <p className="discoverdh">Rajgadh Estates</p>
                <p className="discoverdp">A self-sufficient township offering diverse residentials options and top-tier facilities</p>
            </div>

            <div className="discovertext" data-aos="fade-right"  data-aos-duration="1500">
                <p>At <span>Kurit Consultants,</span> we bring you the best real estate investment opportunities for long-term growth and value.</p>
            </div>
        </div>
    )
};

export default Discover;