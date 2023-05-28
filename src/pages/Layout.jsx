// External non-components
import { useLayoutEffect, useState } from 'react';

// External components
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { Link, Outlet, useLocation } from 'react-router-dom';

// Internal non-components
import styles from './Layout.module.css';

// Internal components
import Spacer from '../components/Spacer';

const Layout = () => {
  // Get current route
  const location = useLocation();
  // State to manage window resizing
  const [isMobile, setIsMobile] = useState(false);
  // State management to show navigation menu on tap
  const [menuState, setMenuState] = useState(false);

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

  const onMenuClick = () => {
    if (isMobile) {
      setMenuState((prev) => !prev);
    }
  };

  window.addEventListener('resize', checkIsMobile);

  useLayoutEffect(() => {
    checkIsMobile();
  }, [])

  return (
    <div id={styles.page}>
      <div id={styles.nav}>
        <img id={styles.navProfile} src='profile.jpeg' alt='profile' />
        <h1 id={styles.navHeading}>jacob h. brown</h1>
        <h5>welcome to me</h5>
        <Spacer style={{ width: '20vw', height: '10px' }} />
        <nav className={`${isMobile ? styles.navLinksMobile : ''} ${menuState ? styles.navLinksMobile_active : ''}`}>
          <button onClick={onMenuClick} hidden={!isMobile}>
            <HiMenu size={25} />
          </button>
          <div hidden={isMobile && !menuState}>
            <Link to='/' className={isCurrentPage('/')} onClick={onMenuClick}>
              <h1>home</h1>
            </Link>
            <Link to='/code' className={isCurrentPage('/code')} onClick={onMenuClick}>
              <h1>code</h1>
            </Link>
            <Link to='/photos' className={isCurrentPage('/photos')} onClick={onMenuClick}>
              <h1>photos</h1>
            </Link>
            <Link to='/writing' className={isCurrentPage('/writing')} onClick={onMenuClick}>
              <h1>writing</h1>
            </Link>
          </div>
        </nav>
        <div id={styles.socials}>
          <a href='https://github.com/jhbforlife' target='_blank'>
            <AiFillGithub size={50} />
          </a>
          <a href='https://instagram.com/jhbforlife' target='_blank'>
            <AiFillInstagram size={50} />
          </a>
          <a href='https://linkedin.com/in/jacobhbrown99' target='_blank'>
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
