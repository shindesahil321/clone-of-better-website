// pages/index.js
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'; // General styles for the home page

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <HeroSection />
      <MainContent /> {/* This will include the updated MainContent */}
      <Footer />
    </div>
  );
}

