import styles from '@/styles/headline.module.css';

const Headline = () => {
    return (
        <div className={styles.headline}>
            <div className={styles.headline__container}>
                <h1>Find your favorite products now.</h1>
            </div>
        </div>
    );
};

export default Headline;
