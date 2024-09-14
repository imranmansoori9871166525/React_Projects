// import React, { useState, CSSProperties } from "react";
// import { TestimonialData } from "../constants/Constants";
// import { Card } from "react-bootstrap";
// import { theme } from "../theme/theme";
// import { Label } from "./switchCaseComponents";
// import ArrowRight from "../assets/svg/sliderRight.svg";
// import ArrowLeft from "../assets/svg/sliderLeft.svg";
// import "./styles/Testimonial.css";

// const Testimonial: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animationClass, setAnimationClass] = useState("fade-in");

//   const itemsPerSlide = window.innerWidth < 1070 ? 1 : 2;
//   const totalSlides = Math.ceil(
//     TestimonialData.slice(0, 6).length / itemsPerSlide
//   );

//   const handlePrevious = () => {
//     setAnimationClass("fade-out");
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
//       );
//       setAnimationClass("fade-in");
//     }, 400);
//   };

//   const handleNext = () => {
//     setAnimationClass("fade-out");
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
//       );
//       setAnimationClass("fade-in");
//     }, 400);
//   };

//   const startIndex = currentIndex * itemsPerSlide;
//   const activeSlider = TestimonialData.slice(
//     startIndex,
//     startIndex + itemsPerSlide
//   );

//   return (
//     <div className="container my-4 mainTestimonials">
//       <div className="d-flex justify-content-center align-items-center mb-4 mainTestimonials">
//         <button
//           style={buttonStyle}
//           onClick={handlePrevious}
//           className="hoverButtonTestimonial"
//         >
//           <img src={ArrowLeft} alt="Previous" />
//         </button>

//         <div className="d-flex justify-content-center align-items-center">
//           {activeSlider.map((testimonial, index) => (
//             <Card
//               key={index}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//               className="card-custom py-3 px-4 mx-2 mainTestimonials"
//             >
//               <div
//                 className={`d-flex justify-content-center ${animationClass}`}
//                 style={{
//                   width: "100%",
//                   marginTop: "10px",
//                 }}
//               >
//                 <div
//                   style={{ width: "112px", height: "112px" }}
//                   className={animationClass}
//                 >
//                   {testimonial.image && (
//                     <Card.Img
//                       variant="top"
//                       src={testimonial.image}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                       }}
//                     />
//                   )}
//                 </div>
//               </div>
//               <Card.Body
//                 className={`d-flex flex-column justify-content-between`}
//                 style={{
//                   padding: "1rem",
//                   height: "100%",
//                   textAlign: "center",
//                   boxShadow: theme.shadows.medium,
//                   borderRadius: "8px",
//                 }}
//               >
//                 <div>
//                   <Card.Title
//                     className={`my-3 ${animationClass}`}
//                     style={{ margin: 0 }}
//                   >
//                     <Label
//                       content={testimonial.name}
//                       fontSize="lg"
//                       color={theme.colors.lightGreen}
//                     />
//                   </Card.Title>
//                   <Card.Text
//                     className={`my-4 ${animationClass}`}
//                     style={{ margin: 0 }}
//                   >
//                     <Label content={testimonial.paragraph} color="#B7B7B7" />
//                   </Card.Text>
//                 </div>
//               </Card.Body>
//             </Card>
//           ))}
//         </div>

//         <button onClick={handleNext} className="hoverButtonTestimonial">
//           <img src={ArrowRight} alt="Next" />
//         </button>
//       </div>

//       {/* Dots for active slide */}
//       <div className="d-flex justify-content-center mt-3">
//         {Array.from({ length: totalSlides }).map((_, index) => (
//           <div
//             key={index}
//             style={{
//               width: "16px",
//               height: "16px",
//               borderRadius: "50%",
//               margin: "0 5px",
//               backgroundColor: currentIndex === index ? "#007BFF" : "#B7B7B7",
//               transition: "background-color 0.3s ease",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const buttonStyle: CSSProperties = {
//   borderRadius: "50%",
//   background: "transparent",
//   outline: "none",
//   border: `1px solid rgb(0, 123, 255)`,
//   padding: "1rem",
// };

// export default Testimonial;


import React, { useState, CSSProperties, useRef } from "react";
import { TestimonialData } from "../constants/Constants";
import { Card } from "react-bootstrap";
import { theme } from "../theme/theme";
import { Label } from "./switchCaseComponents";
import ArrowRight from "../assets/svg/sliderRight.svg";
import ArrowLeft from "../assets/svg/sliderLeft.svg";
import "./styles/Testimonial.css";

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const itemsPerSlide = window.innerWidth < 1070 ? 1 : 2;
  const totalSlides = Math.ceil(
    TestimonialData.slice(0, 6).length / itemsPerSlide
  );

  const handlePrevious = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
      );
      setAnimationClass("fade-in");
    }, 400);
  };

  const handleNext = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
      setAnimationClass("fade-in");
    }, 400);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      if (touchStartX.current - touchEndX.current > 50) {
        // Swiped left, go to next slide
        handleNext();
      } else if (touchEndX.current - touchStartX.current > 50) {
        // Swiped right, go to previous slide
        handlePrevious();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const startIndex = currentIndex * itemsPerSlide;
  const activeSlider = TestimonialData.slice(
    startIndex,
    startIndex + itemsPerSlide
  );

  return (
    <div className="container my-4">
      <div
        className="d-flex justify-content-center align-items-center mb-4 mainTestimonials"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button
          style={buttonStyle}
          onClick={handlePrevious}
          className="hoverButtonTestimonial"
        >
          <img src={ArrowLeft} alt="Previous" />
        </button>

        <div className="d-flex justify-content-center align-items-center">
          {activeSlider.map((testimonial, index) => (
            <Card
              key={index}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className="card-custom py-3 px-4 mx-2 mainTestimonials"
            >
              <div
                className={`d-flex justify-content-center ${animationClass}`}
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{ width: "112px", height: "112px" }}
                  className={animationClass}
                >
                  {testimonial.image && (
                    <Card.Img
                      variant="top"
                      src={testimonial.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
              </div>
              <Card.Body
                className={`d-flex flex-column justify-content-between`}
                style={{
                  padding: "1rem",
                  height: "100%",
                  textAlign: "center",
                  boxShadow: theme.shadows.medium,
                  borderRadius: "8px",
                }}
              >
                <div>
                  <Card.Title
                    className={`my-3 ${animationClass}`}
                    style={{ margin: 0 }}
                  >
                    <Label
                      content={testimonial.name}
                      fontSize="lg"
                      color={theme.colors.lightGreen}
                    />
                  </Card.Title>
                  <Card.Text
                    className={`my-4 ${animationClass}`}
                    style={{ margin: 0 }}
                  >
                    <Label content={testimonial.paragraph} color="#B7B7B7" />
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        <button onClick={handleNext} className="hoverButtonTestimonial">
          <img src={ArrowRight} alt="Next" />
        </button>
      </div>

      {/* Dots for active slide */}
      <div className="d-flex justify-content-center mt-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              margin: "0 5px",
              backgroundColor: currentIndex === index ? "#007BFF" : "#B7B7B7",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const buttonStyle: CSSProperties = {
  borderRadius: "50%",
  background: "transparent",
  outline: "none",
  border: `1px solid rgb(0, 123, 255)`,
  padding: "1rem",
};

export default Testimonial;
