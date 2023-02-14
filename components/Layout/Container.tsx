import { ReactNode } from 'react';
import styles from '@/styles/layout.module.css';
import { isMobile } from 'react-device-detect';
import clsx from 'clsx';

type ContainerProps = {
    children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return (
        <div
            className={clsx({
                [styles.container]: true,
                [styles.container__mobile]: isMobile
            })}
        >
            {children}
        </div>
    );
};

export default Container;
