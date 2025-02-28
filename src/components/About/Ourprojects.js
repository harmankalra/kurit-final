// import React, { useEffect, useRef, useState } from "react";
// import "./styleourproject.css";

// const projects = [
//     { name: "DREAMCITY LUDHIANA", img: require("../../assets/scroll1.png") },
//     { name: "UMBERA ORCHARD", img: require("../../assets/scroll2.png") },
//     { name: "RAJGADH ESTATE", img: require("../../assets/scroll3.png") },
// ];

// const Ourproject = () => {
//     const scrollRef = useRef(null);
//     const isDraggingRef = useRef(false);
//     const [startX, setStartX] = useState(0);
//     const [scrollLeft, setScrollLeft] = useState(0);

//     useEffect(() => {
//         const scrollElement = scrollRef.current;
//         if (!scrollElement) return;

//         let scrollSpeed = 0.7; // Adjust scroll speed

//         const scrollLoop = () => {
//             if (!isDraggingRef.current) {
//                 scrollElement.scrollLeft += scrollSpeed; // Move scroll position
//                 // Reset scroll position when it reaches halfway
//                 if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
//                     scrollElement.scrollLeft = 0;
//                 }
//             }
//             requestAnimationFrame(scrollLoop); // Keep scrolling continuously
//         };

//         scrollLoop();
//     }, []);

//     const handleMouseDown = (e) => {
//         isDraggingRef.current = true;
//         setStartX(e.pageX - scrollRef.current.offsetLeft);
//         setScrollLeft(scrollRef.current.scrollLeft);
//     };

//     const handleMouseMove = (e) => {
//         console.log("mouse move");
//         if (!isDraggingRef.current) return;
//         console.log("mouse move1111");
//         e.preventDefault();
//         const x = e.pageX - scrollRef.current.offsetLeft;
//         const walk = (x - startX) * 2;
//         scrollRef.current.scrollLeft = scrollLeft - walk;
//     };

//     const handleMouseUp = () => {
//         isDraggingRef.current = false;
//     };
// console.log("projects",scrollRef);
//     return (
//         <div className="ourprojectsection">
//             <div className="ourprojectHeading">
//                 <p>Our Projects</p>
//             </div>

//             <div
//                 className="ourproject"
//                 ref={scrollRef}
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseUp}
//                 onMouseUp={handleMouseUp}
//             >
//                 {[...projects, ...projects].map((project, index) => (
//                     <div
//                         key={index}
//                         className="imagediv"
//                         style={{ backgroundImage: `url(${project.img})` }}
//                     >
//                         <p>{project.name}</p>
//                         <div className="navbarCont">
//                             <div className="contactUsHead">
//                                 <p>Contact Us</p>
//                             </div>
//                             <div className="navbarContactNu">
//                                 <p>+91 95177 77992</p>
//                                 <img
//                                     src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png"
//                                     alt=""
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Ourproject;



import React, { useEffect, useRef, useState } from "react";
import "./styleourproject.css";

const projects = [
    { name: "DREAMCITY LUDHIANA", img: require("../../assets/scroll1.png") },
    { name: "UMBERA ORCHARD", img: require("../../assets/scroll2.png") },
    { name: "RAJGADH ESTATE", img: require("../../assets/scroll3.png") },
];

const Ourproject = () => {
    const scrollRef = useRef(null);
    const isDraggingRef = useRef(false); // Use a ref to track dragging state
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;

        let scrollSpeed = 1;

        const scrollLoop = () => {
            if (!isDraggingRef.current) {
                scrollElement.scrollLeft += scrollSpeed;
                if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
                    scrollElement.scrollLeft = 1;
                }
            }
            requestAnimationFrame(scrollLoop);
        };

        scrollLoop();
    }, []);

    const handleMouseDown = (e) => {
        isDraggingRef.current = true; // Set dragging state
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDraggingRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        isDraggingRef.current = false; // Reset dragging state
    };

    return (
        <div className="ourprojectsection">
            <div className="ourprojectHeading">
                <p>Our Projects</p>
            </div>

            <div 
                className="ourproject" 
                ref={scrollRef} 
                onMouseDown={handleMouseDown} 
                onMouseMove={handleMouseMove} 
                onMouseLeave={handleMouseUp} 
                onMouseUp={handleMouseUp}
            >
                {[...projects, ...projects].map((project, index) => (
                    <div key={index} className="imagediv" style={{ backgroundImage: `url(${project.img})` }}>
                        <p>{project.name}</p>
                        <div className="navbarCont">
                            <div className="contactUsHead">
                                <p>Contact Us</p>
                            </div>
                            <div className="navbarContactNu">
                                <p>+91 95177 77992</p>
                                <img src="https://res.cloudinary.com/dznnm9b1j/image/upload/v1740036744/up-right-arrow_ovtgwy.png" alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ourproject;