import { useState } from 'react';

import { HiMenu } from 'react-icons/hi';

import styles from './NavMenu.module.css';

const NavMenu = ({ isHidden }) => {
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
