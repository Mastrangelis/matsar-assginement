import { useState } from 'react';
import styles from '@/styles/navbar.module.css';
import Menu from './Menu';
import Search from './Search';

const NavBar = () => {
    const [isMenuIcon, setIsMenuIcon] = useState<boolean>(false);

    return (
        <div data-testid="navbar" className={styles.navbar}>
            <div className={styles.navbar__container}>
                <Menu isMenuIcon={isMenuIcon} setIsMenuIcon={setIsMenuIcon} />
                <Search isMenuIcon={isMenuIcon} />
            </div>
        </div>
    );
};
export default NavBar;
