/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useKeyPress } from '@/hooks/useKeyPressed';
import styles from '@/styles/dropdown.module.css';
import DropdownHeader from './DropdownHeader';
import DropdownLine from './DropdownLine';
import DropdownList from './DropdownList';

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
    const [cursor, setCursor] = useState<number>(-1);
    const [hovered, setHovered] = useState<string>('');

    const downPress: boolean = useKeyPress('ArrowDown');
    const upPress: boolean = useKeyPress('ArrowUp');
    const enterPress: boolean = useKeyPress('Enter');

    useEffect(() => {
        if (searches?.length && downPress) {
            setCursor((prev: number) =>
                prev < searches?.length - 1 ? prev + 1 : prev
            );
        }
    }, [downPress]);

    useEffect(() => {
        if (searches?.length && upPress) {
            setCursor((prev: number) => (prev > 0 ? prev - 1 : prev));
        }
    }, [upPress]);

    useEffect(() => {
        if (searches?.length && enterPress) {
            onIconClick(searches[cursor]);
        }
    }, [cursor, enterPress]);

    useEffect(() => {
        if (searches?.length && hovered) {
            setCursor(searches.indexOf(hovered));
        }
    }, [hovered]);

    return (
        <div className={styles.dropdown}>
            <DropdownHeader hasClear={hasClear} header={header} />
            <DropdownLine />
            <DropdownList
                searches={searches}
                hasClear={hasClear}
                cursor={cursor}
                hovered={hovered}
                onIconClick={onIconClick}
                setCursor={setCursor}
                setHovered={setHovered}
            />
        </div>
    );
};

export default Dropdown;
