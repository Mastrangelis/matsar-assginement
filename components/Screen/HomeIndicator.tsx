import { NextRouter, useRouter } from 'next/router';
import styles from '@/styles/screen.module.css';

const HomeIndicator = () => {
    const router: NextRouter = useRouter();

    const onIndicatorClick = () => router.push('/');

    return (
        <div className={styles.home__indicator} onClick={onIndicatorClick}>
            <div className={styles.home__indicatorContainer}>
                <div className={styles.home__indicatorIndicator} />
            </div>
        </div>
    );
};

export default HomeIndicator;
