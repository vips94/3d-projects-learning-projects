import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './carousel.module.scss';

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const timeline = gsap.timeline();

    const itemWidth = carousel.clientWidth;
    timeline.to(carousel, { x: -itemWidth * currentIndex, duration: 0.5, ease: 'power1.inOut' });

    return () => {
      timeline.kill();
    };
  }, [currentIndex]);

  const handleItemClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles["carousel"]} ref={carouselRef}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles["carousel-item"]} ${index === currentIndex ? 'active' : ''}`}
          onClick={() => handleItemClick(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
