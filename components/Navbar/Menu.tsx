import styles from '@/styles/burger.module.css';
import { useEffect, useState } from 'react';
import Image from '../Image';
import clsx from 'clsx';
import { useRouter } from 'next/router';

const Menu = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        if (router.pathname !== '/search-results' && showMenu) {
            setShowMenu(false);
        }
        if (router.pathname === '/search-results' && !showMenu) {
            setShowMenu(true);
        }
    }, [router.pathname, showMenu]);

    const handleClick = () => setIsOpen((prev: boolean) => !prev);

    return (
        <>
            {showMenu && (
                <div className={styles['menu-icon']} onClick={handleClick}>
                    <Image
                        src="/Menu.svg"
                        alt="Menu-icon"
                        width={24}
                        height={24}
                    />
                </div>
            )}
            <div
                className={clsx({
                    [styles['menu-wrap']]: true,
                    [styles['menu-wrap--active']]: isOpen
                })}
            >
                <div className={styles['menu-close']} onClick={handleClick}>
                    <Image
                        src="/Close.svg"
                        alt="Close"
                        width={24}
                        height={24}
                    />
                </div>

                <div className={styles['menu-list']}>
                    <a onClick={() => router.push('/search-results')}>
                        Search Results
                    </a>
                    <a onClick={() => router.push('/search-suggestions')}>
                        Search Suggestions
                    </a>
                    <a onClick={() => router.push('/recent-searches')}>
                        Recent Searches
                    </a>
                </div>
                <div className={styles['menu-copyright']}>
                    @All rights reserved <span>MatSpar</span>
                </div>
            </div>
        </>
    );
};

export default Menu;
