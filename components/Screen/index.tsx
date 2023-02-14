import { ReactNode } from 'react';
import styles from '@/styles/screen.module.css';
import HomeIndicator from './HomeIndicator';
import NavBar from '../Navbar';
import StatusBar from './StatusBar';
import Container from '../Layout/Container';
import { isMobile } from 'react-device-detect';
import clsx from 'clsx';

type ScreenProps = {
    children?: ReactNode;
};

const Screen = ({ children }: ScreenProps) => {
    return (
        <div
            className={clsx({
                [styles.screen]: true,
                [styles.screen__mobile]: isMobile
            })}
        >
            {!isMobile && <StatusBar />}
            <Container>
                <NavBar />
                {children}
            </Container>
            <HomeIndicator />
        </div>
    );
};

export default Screen;
