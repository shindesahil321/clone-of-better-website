// pages/start.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import styles from '../styles/start.module.css'; // Import the CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faDollarSign, faHome } from '@fortawesome/free-solid-svg-icons';

export default function Start() {
  return (
    <div className={styles.startPage}>
      <Navbar />
      <section className={styles.heroSection}>
        <h1>Get Your Dream Home</h1>
        <p>Find out how we can help you buy, refinance, or access your home equity.</p>
        <a href="/apply" className={styles.applyNowButton}>Apply Now</a>
      </section>
      <div className={styles.featureCards}>
        <FeatureCard
          title="Buying a Home"
          description="Get pre-approved and find your dream home."
          icon={<FontAwesomeIcon icon={faBuildingColumns} />}
        />
        <FeatureCard
          title="Refinancing"
          description="Lower your rate or get cash out with ease."
          icon={<FontAwesomeIcon icon={faDollarSign} />}
        />
        <FeatureCard
          title="Home Equity"
          description="Use your home equity for major expenses."
          icon={<FontAwesomeIcon icon={faHome} />}
        />
      </div>
      <Footer />
    </div>
  );
}
