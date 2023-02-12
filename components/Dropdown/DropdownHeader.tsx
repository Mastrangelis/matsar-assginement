import { useSearchContext } from '@/context/SearchContext';
import styles from '@/styles/dropdown.module.css';

type DropdownHeaderProps = {
    header: string;
    hasClear?: boolean;
};

const DropdownHeader = ({ header, hasClear }: DropdownHeaderProps) => {
    const { removeAllSearches } = useSearchContext();

    return (
        <div className={styles.dropdown__header}>
            <span>{header}</span>
            {hasClear && <span onClick={removeAllSearches}>Clear all</span>}
        </div>
    );
};

export default DropdownHeader;
