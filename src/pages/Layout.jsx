// External non-components
import { useLayoutEffect, useState } from 'react';

// External components
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Outlet, useLocation } from 'react-router-dom';

// Internal non-components
import styles from './Layout.module.css';

// Internal components
import Spacer from '../components/Spacer';

const Layout = () => {
  // Get current route
  const location = useLocation();
  // State to manage mobile UI
  const [isMobile, setIsMobile] = useState(false);
  // State to manage window resizing
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // State management to show navigation menu on tap
  const [menuState, setMenuState] = useState(false);

  // Checks if the current route is the current page
  const isCurrentPage = (page) => {
    return page === location.pathname ? styles.currentPage : '';
  };

  const onMenuClick = () => {
    if (isMobile) {
      setMenuState((prev) => !prev);
    }
  };

  window.addEventListener(
    'resize',
    setWindowWidth.bind(this, window.innerWidth)
  );

  useLayoutEffect(() => {
    // Checks if the mobile UI should be used or not
    windowWidth <= 768 ?
      setIsMobile(true) :
      setIsMobile(false)
  }, [isMobile, windowWidth]);

  return (
    <div id={styles.page}>
      <div id={styles.nav}>
        <img id={styles.navProfile} src='profile.jpeg' alt='profile' />
        <h1 id={styles.navHeading}>jacob h. brown</h1>
        <h5>welcome to me</h5>
        <Spacer style={{ width: '20vw', height: '10px' }} />
        {/* <nav
          className={`${isMobile ? styles.navLinksMobile : ''} ${
            menuState ? styles.navLinksMobile_active : ''
          }`}
        >
          <button onClick={onMenuClick} hidden={!isMobile}>
            <HiMenu size={25} />
          </button>
          <div hidden={isMobile && !menuState}>
            <Link to='/' className={isCurrentPage('/')} onClick={onMenuClick}>
              <h1>home</h1>
            </Link>
            <Link
              to='/code'
              className={isCurrentPage('/code')}
              onClick={onMenuClick}
            >
              <h1>code</h1>
            </Link>
            <Link
              to='/photos'
              className={isCurrentPage('/photos')}
              onClick={onMenuClick}
            >
              <h1>photos</h1>
            </Link>
            <Link
              to='/writing'
              className={isCurrentPage('/writing')}
              onClick={onMenuClick}
            >
              <h1>writing</h1>
            </Link>
          </div>
        </nav> */}
        <div id={styles.socials}>
          <a
            href='https://github.com/jhbforlife'
            rel='noreferrer'
            target='_blank'
          >
            <AiFillGithub size={50} />
          </a>
          <a
            href='https://instagram.com/jhbforlife'
            rel='noreferrer'
            target='_blank'
          >
            <AiFillInstagram size={50} />
          </a>
          <a
            href='https://linkedin.com/in/jacobhbrown99'
            rel='noreferrer'
            target='_blank'
          >
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
