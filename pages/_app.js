import '../styles/global.css'; // Import global CSS here
import '../styles/start.module.css'; // Import module CSS if needed
import Navbar from '../components/Navbar'; // Import the Navbar component

export default function App({ Component, pageProps }) {
  // Determine whether to show Navbar based on the pageProps
  const showNavbar = pageProps.showNavbar !== false; // Default to true unless specified

  return (
    <>
      {showNavbar && <Navbar />} {/* Render Navbar based on condition */}
      <Component {...pageProps} />
    </>
  );
}
