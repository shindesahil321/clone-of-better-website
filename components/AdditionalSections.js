// components/AdditionalSections.js
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/AdditionalSections.module.css'; // Import CSS module for AdditionalSections

const additionalContent = {
  products: [
    { title: 'Buying Your Home with Better', image: '/images/buying-home.png' },
    { title: 'One Day Mortgage', image: '/images/one-day-mortgage.png' },
    { title: 'Better HELOC', image: '/images/better-heloc.png' },
  ],
  calculator: [
    { title: 'Mortgage Calculator', image: '/images/mortgage-calculator.png' },
    { title: 'Affordability Calculator', image: '/images/affordability-calculator.png' },
    { title: 'HELOC Calculator', image: '/images/heloc-calculator.png' },
  ],
  guide: [
    { title: 'What’s Good in Debt-to-Income Ratio for a Home Loan', image: '/images/debt-to-income-ratio.png' },
    { title: 'Buying a House Without a Realtor', image: '/images/buying-house-without-realtor.png' },
    { title: 'Timeline for Homebuying Process', image: '/images/homebuying-timeline.png' },
  ],
};

const AdditionalSections = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className={styles.sections}>
      <h2>Got questions? We've got answers</h2>
      <div className={styles.buttonContainer}>
        <button onClick={() => setActiveSection('products')}>Our Products</button>
        <button onClick={() => setActiveSection('calculator')}>Calculator</button>
        <button onClick={() => setActiveSection('guide')}>Guide</button>
      </div>

      {/* Display content based on the selected section */}
      {activeSection && (
        <div className={styles.contentGrid}>
          {additionalContent[activeSection].map((item, index) => (
            <div key={index} className={styles.contentCard}>
              <Image src={item.image} alt={item.title} width={300} height={200} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdditionalSections;
