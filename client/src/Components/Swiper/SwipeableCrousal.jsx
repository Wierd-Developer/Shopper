import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const SwipeableCrousal = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      <div
        className="SwipeableCrousal container"
        style={{
          overflow: "hidden",
          position: "relative",

          // maxWidth: "70%",
          // display: "flex",
          // flexDirection: "column",
          // flexWrap: "wrap",
          // margin: "10px auto",
          // border: "2px solid blue",
        }}
      >
        {/* {products.map((p) => ( */}
        {/* <> */}
        <div
          className="crousal-card "
          style={{
            transition: " ease-in 0.5s",
            transform: `translateX(-${curr * 100}%)`,
          }}
        >
          {slides}
          {/* <img
                src={p.image}
                alt=""
                style={{
                  margin: "auto ",
                  // border: "2px solid red",
                  width: "60%",
                  height: "60%",
                }} */}
          {/* />   */}
        </div>

        <div
          className="chevron-buttons"
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            inset: "0",
          }}
        >
          <button
            onClick={prev}
            style={{
              borderRadius: "30px",
              background: "white",
              color: "gray",
            }}
          >
            <FaChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            style={{
              borderRadius: "30px",
              background: "white",
              color: "gray",
            }}
          >
            <FaChevronRight size={40} />
          </button>
        </div>
        {/* <div
                className="product-info mx-5"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h5>{p.title.slice(0, 27)}</h5>
                <br />
                <p style={{ display: "block" }}>
                  {p.description.substring(0, 32)}
                </p>
              </div> */}
        {/* </> */}
        {/* ))} */}
      </div>
    </>
  );
};

export default SwipeableCrousal;
