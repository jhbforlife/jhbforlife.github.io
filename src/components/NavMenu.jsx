// External components
import { HiMenu } from 'react-icons/hi';

// External non-components
import { useState } from 'react';

// Internal non-components
import styles from './NavMenu.module.css';

const NavMenu = ({ isHidden }) => {
  // State management to show navigation menu on tap
  const [menuState, setMenuState] = useState(false);

  return (
    <div id={styles.navMenu} hidden={isHidden}>
      <button>
        <HiMenu size={25} />
      </button>
      {menuState ? '' : ''}
    </div>
  );
};

export default NavMenu;
