import { useSearchContext } from '@/context/SearchContext';
import { Dropdown, Screen } from 'components';
import { useState } from 'react';
import { useEffect } from 'react';

const RecentSearches = () => {
    const [searches, setSearches] = useState<string[]>([]);

    const { getRecentSearches, removeSearch, isEditingStorage } =
        useSearchContext();

    const onClearSearchClick = (search: string) => {
        removeSearch(search);
    };

    useEffect(() => {
        if (!isEditingStorage) {
            setSearches(getRecentSearches());
        }
    }, [isEditingStorage, getRecentSearches]);

    return (
        <Screen>
            <Dropdown
                header="Recent Searches"
                hasClear
                searches={searches}
                onIconClick={onClearSearchClick}
            />
        </Screen>
    );
};

export default RecentSearches;
