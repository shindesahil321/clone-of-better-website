import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Welcome to Better</h1>
        <p className={styles.subtitle}>Your journey to a better home starts here.</p>
        <div className={styles.cta}>
          <Link href="/start" passHref>
            <button className={styles.primaryButton}>Apply Now</button>
          </Link>
          <Link href="/learn-more" passHref>
            <button className={styles.secondaryButton}>Learn More</button>
          </Link>
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image
          src="/images/hero-image.jpg"
          alt="Hero Image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
    </section>
  );
};

export default Hero;
