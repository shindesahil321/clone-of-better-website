// components/Testimonials.js
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Testimonials.module.css'; // Import CSS module for Testimonials

const testimonials = [
  { name: 'Paul', image: '/images/paul.png' },
  { name: 'Amanda', image: '/images/amanda.png' },
  { name: 'Arisan', image: '/images/arisan.png' },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  const goToPrevious = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));

  return (
    <div className={styles.testimonials}>
      <h1 className={styles.heading}>People's Feedback from Customers</h1>
      <div className={styles.slider}>
        <div className={styles.sliderImage}>
          <Image src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} layout="fill" objectFit="cover" />
          <div className={styles.overlay}>
            <p>{testimonials[currentIndex].name}</p>
          </div>
        </div>
        <button onClick={goToPrevious} className={styles.prevButton}>&lt;</button>
        <button onClick={goToNext} className={styles.nextButton}>&gt;</button>
      </div>
    </div>
  );
};

export default Testimonials;
