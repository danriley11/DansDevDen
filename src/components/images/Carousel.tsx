import { ReactNode, useEffect, useState } from 'react';
import { CarouselButton, CarouselContainer, CarouselSlide, CarouselWrapper } from './Carousel.styles';
import leftArrow from '../icons/iconLibrary/left_arrow.svg';
import rightArrow from '../icons/iconLibrary/right_arrow.svg';

type CarouselProps = {
  slides: ReactNode[];
  cycleTimer: number;
};
const Carousel = ({ slides, cycleTimer }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-rotate after interval time
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        handleNext();
      }
    }, cycleTimer);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <CarouselWrapper onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <CarouselContainer>
        {slides.map((slide, index) => (
          <CarouselSlide key={index} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slide}
          </CarouselSlide>
        ))}
      </CarouselContainer>

      <CarouselButton onClick={handlePrev} leftSide>
        <img src={leftArrow} />
      </CarouselButton>

      <CarouselButton onClick={handleNext}>
        <img src={rightArrow} />
      </CarouselButton>
    </CarouselWrapper>
  );
};

export default Carousel;
