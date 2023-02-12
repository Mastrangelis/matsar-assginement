import styles from '@/styles/dropdown.module.css';

const NoResults = () => {
    return (
        <div className={styles.noResults__wrapper}>
            <h3>No searches found.</h3>
        </div>
    );
};

export default NoResults;
