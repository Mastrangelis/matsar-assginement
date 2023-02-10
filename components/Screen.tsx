import HomeIndicator from './HomeIndicator';
import NavBar from './Navbar';
import StatusBar from './StatusBar';

const Screen = () => {
    return (
        <div className="screen">
            <StatusBar />
            <NavBar />
            <HomeIndicator />
        </div>
    );
};

export default Screen;
