import styles from '@/styles/home-indicator.module.css';
import { useRouter } from 'next/router';

const HomeIndicator = () => {
    const router = useRouter();

    const onIndicatorClick = () => router.push('/');

    return (
        <div className={styles['home-indicator']} onClick={onIndicatorClick}>
            <div className={styles['home-indicator__container']}>
                <div className={styles['home-indicator__indicator']} />
            </div>
        </div>
    );
};

export default HomeIndicator;
