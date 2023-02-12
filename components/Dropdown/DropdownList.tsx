import styles from '@/styles/dropdown.module.css';
import { Image, Spinner } from '@/components';
import clsx from 'clsx';
import { ReactElement } from 'react';
import NoResults from './NoResults';

type DropdownListProps = {
    searches: string[];
    cursor: number;
    hovered: string;
    setCursor: CallableFunction;
    setHovered: CallableFunction;
    onIconClick: CallableFunction;
    hasClear?: boolean;
    isLoading?: boolean;
};

type ListItemProps = {
    search: string;
    index: number;
};

const DropdownList = ({
    searches,
    cursor,
    hovered,
    setCursor,
    setHovered,
    onIconClick,
    hasClear,
    isLoading
}: DropdownListProps) => {
    function ListItem({ search, index }: ListItemProps): ReactElement {
        return (
            <div
                className={clsx({
                    [styles.dropdown__listItem]: true,
                    [styles.hoveredDropdownListItem]:
                        cursor === index || hovered === search
                })}
                onMouseEnter={() => setHovered(search)}
                onMouseLeave={() => setHovered('')}
            >
                <span>{search}</span>
                <div
                    className={styles.dropdown__listItemImage}
                    onClick={() => onIconClick(search)}
                >
                    <Image
                        src={hasClear ? '/Close.svg' : '/Search.svg'}
                        alt={hasClear ? 'Clear Search' : 'Search Product'}
                        width={15}
                        height={15}
                    />
                </div>
            </div>
        );
    }
    return (
        <div
            className={styles.dropdown__list}
            onMouseLeave={() => setCursor(-1)}
        >
            {isLoading ? (
                <div className={styles.dropdown__spinner}>
                    <Spinner color="accent" />
                </div>
            ) : searches?.length ? (
                searches?.map((search: string, index: number) => (
                    <ListItem key={index} search={search} index={index} />
                ))
            ) : (
                <NoResults />
            )}
        </div>
    );
};

export default DropdownList;
