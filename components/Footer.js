import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Company</h3>
            <Link href="#" legacyBehavior><a className={styles.link}>About Us</a></Link>
            <Link href="#" legacyBehavior><a className={styles.link}>Careers</a></Link>
            <Link href="#" legacyBehavior><a className={styles.link}>Press</a></Link>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Products</h3>
            <Link href="#" legacyBehavior><a className={styles.link}>Buy a Home</a></Link>
            <Link href="#" legacyBehavior><a className={styles.link}>Refinance</a></Link>
            <Link href="#" legacyBehavior><a className={styles.link}>HELOC</a></Link>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Resources</h3>
            <Link href="#" legacyBehavior><a className={styles.link}>FAQs</a></Link>
            <Link href="#" legacyBehavior><a className={styles.link}>Blog</a></Link>
            <Link href="#" legacyBehavior><a className={styles.link}>Contact Us</a></Link>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Legal</h3>
            <Link href="#" legacyBehavior><a className={styles.link}>Privacy Policy</a></Link>
            <Link href="#" legacyBehavior><a className={styles.link}>Terms of Service</a></Link>
            <Link href="#" legacyBehavior><a className={styles.link}>Disclosures</a></Link>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyRight}>© 2024 Better.com. All rights reserved.</p>
          <div className={styles.socialMedia}>
            <Link href="#" legacyBehavior><a className={styles.socialLink}>Facebook</a></Link>
            <Link href="#" legacyBehavior><a className={styles.socialLink}>Twitter</a></Link>
            <Link href="#" legacyBehavior><a className={styles.socialLink}>LinkedIn</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
