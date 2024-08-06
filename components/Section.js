// components/Section.js
import styles from '../styles/Section.module.css'; // Import CSS module for Section

const Section = () => {
  return (
    <div className={styles.sectionsContainer}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Products</h2>
        <div className={styles.cardContainer}>
          {/* Replace with actual content */}
          <div className={styles.card}>Buying Your Home with Better</div>
          <div className={styles.card}>One Day Mortgage</div>
          <div className={styles.card}>Better HELOC</div>
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Calculator</h2>
        <div className={styles.cardContainer}>
          {/* Replace with actual content */}
          <div className={styles.card}>Mortgage Calculator</div>
          <div className={styles.card}>Affordability Calculator</div>
          <div className={styles.card}>HELOC Calculator</div>
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Guide</h2>
        <div className={styles.cardContainer}>
          {/* Replace with actual content */}
          <div className={styles.card}>What’s Good in Debt-to-Income Ratio for a Home Loan</div>
          <div className={styles.card}>Buying a House Without a Realtor</div>
          <div className={styles.card}>Timeline for Homebuying Process</div>
        </div>
      </div>
    </div>
  );
};

export default Section;
