import { ReactNode } from 'react';
import HomeIndicator from './HomeIndicator';
import NavBar from './Navbar';
import StatusBar from './StatusBar';
import Container from './Container';

type ScreenProps = {
    children?: ReactNode;
};

const Screen = ({ children }: ScreenProps) => {
    return (
        <div className="screen">
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
