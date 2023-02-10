import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from '@/styles/navbar.module.css';
import Image from '../Image';
import Menu from './Menu';
import clsx from 'clsx';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        if (router.pathname !== '/search-results' && showMenu) {
            setShowMenu(false);
        }
        if (router.pathname === '/search-results' && !showMenu) {
            setShowMenu(true);
        }
    }, [router.pathname, showMenu]);

    return (
        <div className={styles['navbar-container']}>
            <div className={styles.navbar}>
                <Menu />

                <div
                    className={clsx({
                        [styles.navbar__search]: true,
                        [styles['navbar__search--full']]: !showMenu
                    })}
                >
                    <Image
                        src="/Search.svg"
                        alt="Search-Icon"
                        width={24}
                        height={24}
                    />

                    <input type="search" placeholder="Search Product" />
                </div>
            </div>
        </div>
    );
};
export default NavBar;
