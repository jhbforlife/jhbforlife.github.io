import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import Spacer from '../components/Spacer';
import { useState } from 'react';
import NavMenu from '../components/NavMenu';

const Layout = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  const isCurrentPage = (page) => {
    return page === location.pathname ? styles.currentPage : '';
  };

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
        {/* <nav hidden={isMobile}>
          <Link to="/" className={isCurrentPage('/')}>
            <h1>home</h1>
          </Link>
          <Link to="/code" className={isCurrentPage('/code')}>
            <h1>code</h1>
          </Link>
          <Link to="/photos" className={isCurrentPage('/photos')}>
            <h1>photos</h1>
          </Link>
          <Link to="/writing" className={isCurrentPage('/writing')}>
            <h1>writing</h1>
          </Link>
        </nav> */}
      </div>
      <div id={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
