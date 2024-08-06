// components/FeatureCard.js
import React from 'react';
import styles from '../styles/FeatureCard.module.css'; // Import the CSS module for FeatureCard

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.icon}>
        {icon}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
