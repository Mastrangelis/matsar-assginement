import styles from '@/styles/navbar.module.css';
import clsx from 'clsx';
import Image from '../Image';
import { useSearchContext } from '@/context/SearchContext';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

type SearchProps = {
    isMenuIcon: boolean;
};

const Search = ({ isMenuIcon }: SearchProps) => {
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
            className={clsx({
                [styles.navbar__search]: true,
                [styles['navbar__search--full']]: !isMenuIcon
            })}
        >
            <div onClick={handleSearchSubmit} style={{ cursor: 'pointer' }}>
                <Image
                    src="/Search.svg"
                    alt="Search-Icon"
                    width={24}
                    height={24}
                />
            </div>

            <form onSubmit={handleSearchSubmit}>
                <input
                    type="search"
                    placeholder="Search Product"
                    onChange={handleSearchInputChange}
                />
            </form>
        </div>
    );
};
export default Search;
