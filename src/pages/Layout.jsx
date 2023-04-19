// External non-components
import { useState } from 'react';

// External components
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Link, Outlet, useLocation } from 'react-router-dom';

// Internal non-components
import styles from './Layout.module.css';

// Internal components
import NavMenu from '../components/NavMenu';
import Spacer from '../components/Spacer';

const Layout = () => {
  // Get current route
  const location = useLocation();
  // State to manage window resizing
  const [isMobile, setIsMobile] = useState(false);

  // Checks if the current route is the current page
  const isCurrentPage = (page) => {
    return page === location.pathname ? styles.currentPage : '';
  };

  // Checks if the mobile UI should be used or not
  const checkIsMobile = () => {
    if (window.innerWidth <= 768 && !isMobile) {
      setIsMobile(true);
    } else if (window.innerWidth > 768 && isMobile) {
      setIsMobile(false);
    }
  };

  window.addEventListener('resize', checkIsMobile);

  return (
    <div id={styles.page}>
      <div id={styles.nav}>
        {/* {isMobile ? <NavMenu /> : ''} */}
        <img id={styles.navProfile} src="profile.jpeg" alt="profile" />
        <h1 id={styles.navHeading}>jacob h. brown</h1>
        <h5>welcome to me</h5>
        <Spacer style={{ width: '20vw', height: '10px' }} />
        <nav hidden={isMobile}>
          <Link to="/" className={isCurrentPage('/')}>
            <h1>home</h1>
          </Link>
          {/* <Link to="/code" className={isCurrentPage('/code')}>
            <h1>code</h1>
          </Link>
          <Link to="/photos" className={isCurrentPage('/photos')}>
            <h1>photos</h1>
          </Link>
          <Link to="/writing" className={isCurrentPage('/writing')}>
            <h1>writing</h1>
          </Link> */}
        </nav>
        <div id={styles.socials}>
          <a href="https://github.com/jhbforlife" target="_blank">
            <AiFillGithub size={50} />
          </a>
          <a href="https://instagram.com/jhbforlife" target="_blank">
            <AiFillInstagram size={50} />
          </a>
          <a href="https://linkedin.com/in/jacobhbrown99" target="_blank">
            <AiFillLinkedin size={50} />
          </a>
        </div>
      </div>
      <div id={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
