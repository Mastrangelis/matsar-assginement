import { ReactNode } from 'react';
import styles from '@/styles/screen.module.css';
import HomeIndicator from './HomeIndicator';
import NavBar from '../Navbar';
import StatusBar from './StatusBar';
import Container from '../Layout/Container';

type ScreenProps = {
    children?: ReactNode;
};

const Screen = ({ children }: ScreenProps) => {
    return (
        <div className={styles.screen}>
            <StatusBar />
            <Container>
                <NavBar />
                {children}
            </Container>
            <HomeIndicator />
        </div>
    );
};

export default Screen;
