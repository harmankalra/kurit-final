import React, { useState, useEffect, useRef } from "react";
import "./Venues.css";

const venues = [
  {
    id: 1,
    name: "AIPL DREAMCITY LUDHIANA",
    images: [
      "https://res.cloudinary.com/dbohtvj14/image/upload/t_RESIZE/v1742202362/scroll1_ds7c3q.webp",
      "https://res.cloudinary.com/dbohtvj14/image/upload/v1742195064/bnrInnerPage-04_ykg6wt.jpg",
      "https://res.cloudinary.com/dbohtvj14/image/upload/v1742201665/Club_Aqua_Fa%C3%A7ade_1_1_lahmrp.webp"
    ],
    propertiesList: [
      { name: "500+* Acre Smart Township", img: "https://res.cloudinary.com/dbohtvj14/image/upload/v1742202002/DSC_1583_mycq6d.webp" },
      { name: "7.4-Acre Central Lake", img: "https://res.cloudinary.com/dbohtvj14/image/upload/t_RESIZE/v1742195061/g01_kzjmke.jpg" },
      { name: "Club Aqua", img: "https://res.cloudinary.com/dbohtvj14/image/upload/v1742201665/Club_Aqua_Fa%C3%A7ade_1_1_lahmrp.webp" },
      { name: "Integrated Amenities", img: "https://res.cloudinary.com/dbohtvj14/image/upload/v1742201972/Burrow-2_1_lafwtj.webp" },
      { name: "Green Environment", img: "https://res.cloudinary.com/dbohtvj14/image/upload/v1742201859/residence2_azuivf.jpg" }
    ]
  },
  {
    id: 2,
    name: "RAJGADH ESTATES",
    images: [
      "https://res.cloudinary.com/dbohtvj14/image/upload/t_chotu rajgarh /v1742207372/02_tssdqu.jpg",
      "https://res.cloudinary.com/dbohtvj14/image/upload/t_RESIZE/v1742207372/05_odpbzm.jpg",
      "https://res.cloudinary.com/dbohtvj14/image/upload/v1742207371/06_nzublk.jpg"
    ],
    propertiesList: [
      { name: "Premium Residential Plots", img: "https://res.cloudinary.com/dbohtvj14/image/upload/v1742207371/Aerial_view01-min_uhjtlv.webp" },
      { name: "Modern Infrastructure & Amenities", img: "https://res.cloudinary.com/dbohtvj14/image/upload/v1742207371/07_oeohmm.jpg"},
      { name: "Gated Community with Security"  , img: "https://res.cloudinary.com/dbohtvj14/image/upload/t_chotu rajgarh /v1742207372/02_tssdqu.jpg" 
      },
      { name: "Eco-Friendly Living", img: "https://res.cloudinary.com/dbohtvj14/image/upload/v1742207371/Rajgadh_banner_tkumf5.jpg" },
      { name: "Green Parks & Open Spaces", img: "https://res.cloudinary.com/dbohtvj14/image/upload/v1742207371/infrasructure-banner_ls3owu.jpg" }
    ]
  },
  {
    id: 3,
    name: "UMBERA ORCHARD",
    images: [
      "https://res.cloudinary.com/dbohtvj14/image/upload/v1742212453/Image-1_p7l0c6_1_vnsdsu.png",
      "https://res.cloudinary.com/dbohtvj14/image/upload/v1742212456/Screenshot_2025-03-01_182915_h80nsj_1_wm2hjm.png",
      "https://res.cloudinary.com/dbohtvj14/image/upload/v1742212453/Screenshot_2025-03-01_182838_g34abz_3_piq5rq.png"
    ],
    propertiesList: [
      { name: "The Luxe Spots Zone", img: "https://res.cloudinary.com/dbohtvj14/image/upload/v1742212453/Screenshot_2025-03-01_182925_zq9hsw_1_iwcrqr.png" },
      { name: "Sculpture Garden Retreat", img: "https://res.cloudinary.com/dbohtvj14/image/upload/v1742212456/Screenshot_2025-03-01_182915_h80nsj_1_wm2hjm.png"},
      { name: "Prestige Putting Green", img: "https://res.cloudinary.com/dbohtvj14/image/upload/v1742212453/Screenshot_2025-03-01_182838_g34abz_3_piq5rq.png" },
      { name: "Zen Harmony Garden", img: "https://res.cloudinary.com/dbohtvj14/image/upload/v1742212454/Screenshot_2025-03-01_182945_frmm3j.png" },
      { name: "Shaded Lotus Plaza Royale", img: "https://res.cloudinary.com/dbohtvj14/image/upload/v1742212454/WhatsApp_Image_2025-03-01_at_6.28.47_PM_rrsxg6.jpg" }
    ]
    
  }
];

const Venue = () => {
  const [currentIndexes, setCurrentIndexes] = useState(Array(venues.length).fill(0));
  const [loading, setLoading] = useState(true);
  const [selectedProperties, setSelectedProperties] = useState(Array(venues.length).fill(0));
  const [showNewImage, setShowNewImage] = useState(true);
  
  // Refs for drag functionality
  const dragStartXRef = useRef(null);
  const currentVenueRef = useRef(null);
  
  // State for cursor indicators
  const [cursorType, setCursorType] = useState(Array(venues.length).fill("grab"));

  useEffect(() => {
    const allImages = venues.flatMap((venue) => venue.images);
    preloadImages(allImages, () => setLoading(false));
  }, []);

  const preloadImages = (images, callback) => {
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) callback();
      };
    });
  };

  useEffect(() => {
    const propertyInterval = setInterval(() => {
      setShowNewImage(false);
      setTimeout(() => {
        setSelectedProperties((prevProps) =>
          prevProps.map((index, venueIndex) =>
            (index + 1) % venues[venueIndex].propertiesList.length
          )
        );
        setShowNewImage(true);
      }, 500);
    }, 5000);

    return () => clearInterval(propertyInterval);
  }, []);

  const goToSlide = (venueIndex, imageIndex) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((index, i) => (i === venueIndex ? imageIndex : index))
    );
  };

  // Mouse drag handlers
  const handleDragStart = (e, venueIndex) => {
    e.preventDefault();
    dragStartXRef.current = e.clientX;
    currentVenueRef.current = venueIndex;
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    
    // Change cursor to grabbing during drag
    updateCursor(venueIndex, "grabbing");
  };

  const handleDragMove = (e) => {
    if (dragStartXRef.current === null || currentVenueRef.current === null) return;
    // This is only for tracking the movement, not necessary to update UI during drag
  };

  const handleDragEnd = (e) => {
    if (dragStartXRef.current === null || currentVenueRef.current === null) return;
    
    const dragEndX = e.clientX;
    const dragDistance = dragEndX - dragStartXRef.current;
    const venueIndex = currentVenueRef.current;
    const imagesCount = venues[venueIndex].images.length;
    
    // Determine if drag was significant enough to change slides
    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        // Dragged right - go to previous image
        const newIndex = (currentIndexes[venueIndex] - 1 + imagesCount) % imagesCount;
        goToSlide(venueIndex, newIndex);
      } else {
        // Dragged left - go to next image
        const newIndex = (currentIndexes[venueIndex] + 1) % imagesCount;
        goToSlide(venueIndex, newIndex);
      }
    }
    
    // Reset cursor after drag
    updateCursor(venueIndex, "grab");
    
    // Clean up
    dragStartXRef.current = null;
    currentVenueRef.current = null;
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
  };

  // Handle touch events for mobile
  const handleTouchStart = (e, venueIndex) => {
    dragStartXRef.current = e.touches[0].clientX;
    currentVenueRef.current = venueIndex;
  };

  const handleTouchMove = (e) => {
    if (dragStartXRef.current === null || currentVenueRef.current === null) return;
    // This is only for tracking the movement, not necessary to update UI during touch
  };

  const handleTouchEnd = (e) => {
    if (dragStartXRef.current === null || currentVenueRef.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const dragDistance = touchEndX - dragStartXRef.current;
    const venueIndex = currentVenueRef.current;
    const imagesCount = venues[venueIndex].images.length;
    
    // Determine if drag was significant enough to change slides
    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        // Swiped right - go to previous image
        const newIndex = (currentIndexes[venueIndex] - 1 + imagesCount) % imagesCount;
        goToSlide(venueIndex, newIndex);
      } else {
        // Swiped left - go to next image
        const newIndex = (currentIndexes[venueIndex] + 1) % imagesCount;
        goToSlide(venueIndex, newIndex);
      }
    }
    
    // Clean up
    dragStartXRef.current = null;
    currentVenueRef.current = null;
  };

  // Update cursor based on mouse position
  const handleMouseMove = (e, venueIndex) => {
    const imageElement = e.currentTarget;
    const rect = imageElement.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const width = rect.width;
    
    // Define left and right zones (25% from each edge)
    const leftZone = width * 0.25;
    const rightZone = width * 0.75;
    
    if (x < leftZone) {
      // Left side of image - show left arrow cursor
      updateCursor(venueIndex, "left-arrow");
    } else if (x > rightZone) {
      // Right side of image - show right arrow cursor
      updateCursor(venueIndex, "right-arrow");
    } else {
      // Middle of image - show grab cursor
      updateCursor(venueIndex, "grab");
    }
  };

  // Helper to update cursor for a specific venue
  const updateCursor = (venueIndex, type) => {
    setCursorType(prev => {
      const newState = [...prev];
      newState[venueIndex] = type;
      return newState;
    });
  };

  // Reset cursor when mouse leaves the image
  const handleMouseLeave = (venueIndex) => {
    updateCursor(venueIndex, "grab");
  };
  
  // Helper function to get the cursor style
  const getCursorStyle = (type) => {
    switch(type) {
      case "left-arrow":
        return "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"rgba(0,0,0,0.5)\"/><polyline points=\"15 18 9 12 15 6\"/></svg>') 16 16, auto";
      case "right-arrow":
        return "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"rgba(0,0,0,0.5)\"/><polyline points=\"9 6 15 12 9 18\"/></svg>') 16 16, auto";
      case "grabbing":
        return "grabbing";
      default:
        return "grab";
    }
  };

  if (loading) {
    return <div className="loading">Loading images...</div>;
  }

  return (
    <main>
      <ul id="cards">
        {venues.map((venue, venueIndex) => (
          <li key={venue.id} className="card">
            <div className="venue">
              <div className="venueLower">
                <div className="venueUpper">
                  <div className="carousel-container" style={{ position: 'relative',width :'95%', margin :'auto' }}>
                      <img loading="lazy"
                      src={venue.images[currentIndexes[venueIndex]]}
                      className="carouselImage fade-zoom"
                      alt="Venue"
                      onClick={() =>
                        goToSlide(venueIndex, (currentIndexes[venueIndex] + 1) % venue.images.length)
                      }
                      onMouseDown={(e) => handleDragStart(e, venueIndex)}
                      onMouseMove={(e) => handleMouseMove(e, venueIndex)}
                      onMouseLeave={() => handleMouseLeave(venueIndex)}
                      onTouchStart={(e) => handleTouchStart(e, venueIndex)}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                      style={{  cursor: getCursorStyle(cursorType[venueIndex]) }}
                    />
                  </div>
                  
                  <div className="carouselControls">
                    {venue.images.map((_, index) => (
                      <button
                        key={index}
                        className={`carouselButton ${index === currentIndexes[venueIndex] ? "active" : ""}`}
                        onClick={() => goToSlide(venueIndex, index)}
                      ></button>
                    ))}
                  </div>
                </div>
                <div className="venueLowerDetail">
                  <div className="venueLowerDHeading">
                    <p>{venue.name}</p>
                    <div className="navbarContact1">
                    <a href="tel:+919517777992">
                      <div className="contactUsHeading1">
                        <p>Contact Us</p>
                      </div>
                      <div className="navbarContactNumber1">
                        <p>+91 95177 77992</p>
                          <img loading="lazy" src="https://res.cloudinary.com/dbohtvj14/image/upload/v1742196155/Group_15_kje7pw.png" alt="" />
                      </div>
                    </a>
                    </div>
                  </div>
                  <div className="venueLowerDDetails">
                    <div className="venueLeft">
                      {venue.propertiesList.map((property, index) => (
                        <p
                          key={index}
                          className={`properties ${selectedProperties[venueIndex] === index ? "selected" : ""}`}
                          onClick={() => {
                            setSelectedProperties((prev) => {
                              const newProps = [...prev];
                              newProps[venueIndex] = index;
                              return newProps;
                            });
                          }}
                        >
                          {selectedProperties[venueIndex] === index ? `—— ${property.name}` : property.name}
                        </p>
                      ))}
                    </div>
                    <div className="venueRight">
                        <img loading="lazy" src={venue.propertiesList[selectedProperties[venueIndex]].img} alt="" className={`venueImage ${showNewImage ? "active" : ""}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Venue;