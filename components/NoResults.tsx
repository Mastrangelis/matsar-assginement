import styles from '@/styles/noResults.module.css';

const NoResults = () => {
    return (
        <div className={styles.noResultsWrapper}>
            <h3>No searches found.</h3>
        </div>
    );
};

export default NoResults;
