import { useState } from 'react';
import styles from '@/styles/navbar.module.css';
import Menu from './Menu';
import Search from './Search';

const NavBar = () => {
    const [isMenuIcon, setIsMenuIcon] = useState<boolean>(false);

    return (
        <div className={styles['navbar-container']}>
            <div className={styles.navbar}>
                <Menu isMenuIcon={isMenuIcon} setIsMenuIcon={setIsMenuIcon} />
                <Search isMenuIcon={isMenuIcon} />
            </div>
        </div>
    );
};
export default NavBar;
