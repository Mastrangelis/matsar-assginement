/* eslint-disable react-hooks/exhaustive-deps */
import styles from '@/styles/dropdown.module.css';
import Image from './Image';
import { useSearchContext } from '@/context/SearchContext';
import { useEffect, useState } from 'react';
import { useKeyPress } from '@/hooks/useKeyPressed';
import clsx from 'clsx';
import NoResults from './NoResults';

type DropdownProps = {
    header: string;
    searches: string[];
    onIconClick: (search: string) => void;
    hasClear?: boolean;
};

const Dropdown = ({
    header,
    hasClear = false,
    searches = [],
    onIconClick
}: DropdownProps) => {
    const { removeAllSearches } = useSearchContext();

    const [cursor, setCursor] = useState<number>(-1);
    const [hovered, setHovered] = useState<string>('');

    const downPress = useKeyPress('ArrowDown');
    const upPress = useKeyPress('ArrowUp');
    const enterPress = useKeyPress('Enter');

    useEffect(() => {
        if (searches.length && downPress) {
            setCursor((prevState: number) =>
                prevState < searches.length - 1 ? prevState + 1 : prevState
            );
        }
    }, [downPress]);

    useEffect(() => {
        if (searches.length && upPress) {
            setCursor((prevState: number) =>
                prevState > 0 ? prevState - 1 : prevState
            );
        }
    }, [upPress]);

    useEffect(() => {
        if (searches.length && enterPress) {
            onIconClick(searches[cursor]);
        }
    }, [cursor, enterPress]);

    useEffect(() => {
        if (searches.length && hovered) {
            setCursor(searches.indexOf(hovered));
        }
    }, [hovered]);

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdownHeader}>
                <span>{header}</span>
                {hasClear && <span onClick={removeAllSearches}>Clear all</span>}
            </div>
            <div className={styles.dropdownLine} />
            <div
                className={styles.dropdownList}
                onMouseLeave={() => setCursor(-1)}
            >
                {searches?.length ? (
                    searches?.map((search: string, index: number) => (
                        <div
                            key={index}
                            className={clsx({
                                [styles.dropdownListItem]: true,
                                [styles.hoveredDropdownListItem]:
                                    cursor === index || hovered === search
                            })}
                            onMouseEnter={() => setHovered(search)}
                            onMouseLeave={() => setHovered('')}
                        >
                            <span>{search}</span>
                            <div
                                className={styles.dropdownListItemImage}
                                onClick={() => onIconClick(search)}
                            >
                                <Image
                                    src={
                                        hasClear ? '/Close.svg' : '/Search.svg'
                                    }
                                    alt={
                                        hasClear
                                            ? 'Clear Search'
                                            : 'Search Product'
                                    }
                                    width={15}
                                    height={15}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <NoResults />
                )}
            </div>
        </div>
    );
};

export default Dropdown;
