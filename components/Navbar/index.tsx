import { useState } from 'react';
import styles from '@/styles/navbar.module.css';
import Menu from './Menu';
import Search from './Search';
import clsx from 'clsx';
import { isMobile } from 'react-device-detect';

const NavBar = () => {
    const [isMenuIcon, setIsMenuIcon] = useState<boolean>(false);

    return (
        <div
            data-testid="navbar"
            className={clsx({
                [styles.navbar]: true,
                [styles.navbar__mobile]: isMobile
            })}
        >
            <div className={styles.navbar__container}>
                <Menu isMenuIcon={isMenuIcon} setIsMenuIcon={setIsMenuIcon} />
                <Search isMenuIcon={isMenuIcon} />
            </div>
        </div>
    );
};
export default NavBar;
