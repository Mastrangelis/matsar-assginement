import { ReactElement, ChangeEvent, SyntheticEvent, useState } from 'react';
import { useSearchContext } from '@/context/SearchContext';
import styles from '@/styles/navbar.module.css';
import clsx from 'clsx';
import Image from '../Image';

type SearchProps = {
    isMenuIcon: boolean;
};

const Search = ({ isMenuIcon }: SearchProps): ReactElement => {
    const { addSearch } = useSearchContext();

    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        addSearch(searchTerm);
    };

    return (
        <div
            data-testid="search"
            className={clsx({
                [styles.navbar__search]: true,
                [styles.navbar__searchFull]: !isMenuIcon
            })}
        >
            {/* Search Icon */}
            <div onClick={handleSearchSubmit} style={{ cursor: 'pointer' }}>
                <Image
                    src="/Search.svg"
                    alt="Search-Icon"
                    width={24}
                    height={24}
                />
            </div>

            {/* Form input */}
            <form aria-label="search-form" onSubmit={handleSearchSubmit}>
                <input
                    name="search-input"
                    aria-label="search-input"
                    type="search"
                    placeholder="Search Product"
                    onChange={handleSearchInputChange}
                />
            </form>
        </div>
    );
};
export default Search;
