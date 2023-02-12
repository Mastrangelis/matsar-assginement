import React, { ReactElement, useEffect, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { Page, pages } from '@/constants/pages';
import styles from '@/styles/navbar.module.css';
import clsx from 'clsx';
import Image from '../Image';

type MenuProps = {
    setIsMenuIcon: CallableFunction;
    isMenuIcon: boolean;
};

const Menu = ({ isMenuIcon, setIsMenuIcon }: MenuProps): ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const router: NextRouter = useRouter();

    useEffect(() => {
        if (router.pathname !== '/search-results' && isMenuIcon) {
            setIsMenuIcon(false);
        }
        if (router.pathname === '/search-results' && !isMenuIcon) {
            setIsMenuIcon(true);
        }
    }, [router.pathname, setIsMenuIcon, isMenuIcon]);

    const handleClick = () => setIsOpen((prev: boolean) => !prev);

    function MenuOpenIcon() {
        return (
            <div className={styles.menu__icon} onClick={handleClick}>
                <Image
                    src="/Menu.svg"
                    alt="Menu icon burger"
                    width={24}
                    height={24}
                />
            </div>
        );
    }

    function MenuCloseIcon() {
        return (
            <div className={styles.menu__close} onClick={handleClick}>
                <Image src="/Close.svg" alt="Close" width={24} height={24} />
            </div>
        );
    }

    function MenuList() {
        return (
            <div className={styles.menu__list}>
                {pages?.map((page: Page) => (
                    <React.Fragment key={page.url}>
                        <a onClick={() => router.push(page.url)}>
                            {page.label}
                        </a>
                    </React.Fragment>
                ))}
            </div>
        );
    }

    function MenuListCopyRight() {
        return (
            <div className={styles.menu__copyright}>
                @All rights reserved <span>MatSpar</span>
            </div>
        );
    }
    return (
        <>
            {isMenuIcon && <MenuOpenIcon />}
            <div
                className={clsx({
                    [styles.menu__wrap]: true,
                    [styles.menu__wrapActive]: isOpen
                })}
            >
                <MenuCloseIcon />
                <MenuList />
                <MenuListCopyRight />
            </div>
        </>
    );
};

export default Menu;
