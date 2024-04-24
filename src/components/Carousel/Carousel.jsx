import React, { useState } from "react";
import * as posts from "../../assests/images/posts";
import "./Carousel.css";
import { useInView } from "react-intersection-observer";
import { useSwipeable } from "react-swipeable";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Carousel = () => {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const { ref, inView } = useInView({});

  React.useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [inView, hasBeenInView]);

  const images = [
    { image: posts.post1, link: "https://www.youtube.com/watch?v=zMfbTfjBmHk" },
    { image: posts.post2, link: "https://discord.gg/E8cwXpA6" },
    {
      image: posts.post3,
      link: "https://open.spotify.com/artist/7igrDEryu1H8kwrg2jMP06?si=MMo25M_wTWWtPXoVoKbNDg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(((currentIndex + 1) % images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleImageClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="carouselContOuter" {...handlers}>
      <div
        className={`carouselCont ${hasBeenInView ? "inView" : ""}`}
        ref={ref}
      >
        <h2 className="page-title">Posts</h2>
        <section className="carousel">
          <span className="left-arrow" onClick={prevSlide}>
            <FaArrowCircleLeft />
          </span>
          <div className="slidesCont">
            {images.map((item, index) => (
              <img
                src={item.image}
                alt={`Slide ${index}`}
                key={index}
                className={`image ${
                  index === currentIndex
                    ? "current"
                    : index ===
                      (currentIndex - 1 + images.length) % images.length
                    ? "prev"
                    : index === (currentIndex + 1) % images.length
                    ? "next"
                    : "hidden"
                }`}
                onClick={() => handleImageClick(item.link)}
              />
            ))}
          </div>
          <span className="right-arrow" onClick={nextSlide}>
            <FaArrowCircleRight />
          </span>
        </section>
      </div>
    </div>
  );
};

export default Carousel;
