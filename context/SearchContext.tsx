import React, {
    createContext,
    ReactNode,
    useContext,
    useMemo,
    useCallback,
    MouseEventHandler,
    useState
} from 'react';
import { useEffect } from 'react';

type SearchContextProps = {
    isEditingStorage: boolean;
    addSearch: CallableFunction;
    getRecentSearches: CallableFunction;
    removeAllSearches: MouseEventHandler<HTMLSpanElement>;
    removeSearch: CallableFunction;
};

type SearchContextProviderProps = {
    children: ReactNode;
};

const SearchContext = createContext({} as SearchContextProps);

export const SearchContextProvider = ({
    children
}: SearchContextProviderProps) => {
    const [isEditingStorage, setIsEditingStorage] = useState<boolean>(false);

    useEffect(() => {
        if (isEditingStorage) setIsEditingStorage(false);
    }, [isEditingStorage]);

    const getRecentSearches = useCallback(() => {
        const recentSearches = JSON.parse(
            localStorage.getItem('searches') as string
        );
        return recentSearches ?? [];
    }, []);

    const addSearch = useCallback(
        (search: string) => {
            setIsEditingStorage(true);
            const storedSearches = getRecentSearches();
            if (!storedSearches.includes(search)) {
                localStorage.setItem(
                    'searches',
                    JSON.stringify([...storedSearches, search])
                );
            }
        },
        [getRecentSearches]
    );

    const removeSearch = useCallback(
        (search: string) => {
            setIsEditingStorage(true);
            const storedSearches = getRecentSearches();
            if (storedSearches.includes(search)) {
                const updatedSearches = storedSearches.filter(
                    (storedSearch: string) => storedSearch !== search
                );
                localStorage.setItem(
                    'searches',
                    JSON.stringify([...updatedSearches])
                );
            }
        },
        [getRecentSearches]
    );

    const removeAllSearches = useCallback(() => {
        setIsEditingStorage(true);
        localStorage.setItem('searches', JSON.stringify([]));
    }, []);

    const value: SearchContextProps = useMemo(
        () => ({
            isEditingStorage,
            addSearch,
            getRecentSearches,
            removeSearch,
            removeAllSearches
        }),
        [
            isEditingStorage,
            addSearch,
            getRecentSearches,
            removeSearch,
            removeAllSearches
        ]
    );

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};

export function useSearchContext() {
    return useContext(SearchContext);
}
