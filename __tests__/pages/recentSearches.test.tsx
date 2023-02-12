import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import RecentSearches from '@/pages/recent-searches';
import { SearchContextProvider } from '@/context/SearchContext';

// Mock queryClient and nextRouter
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('react-query', () => ({
    useQuery: jest
        .fn()
        .mockReturnValue({ data: {}, isLoading: false, error: {} })
}));

describe('Recent Searches Page scenario', () => {
    beforeAll(() => mockRouter.push('/recent-searches'));

    it('Should render recent-searches page successfully', () => {
        render(
            <SearchContextProvider>
                <RecentSearches />
            </SearchContextProvider>
        );

        expect(mockRouter).toMatchObject({
            asPath: '/recent-searches',
            pathname: '/recent-searches',
            query: {}
        });
    });

    it('Should render recent-searches page and dropdown should be visilbe', () => {
        render(
            <SearchContextProvider>
                <RecentSearches />
            </SearchContextProvider>
        );

        const dropdown = screen.getByTestId('dropdown');
        expect(dropdown).toBeInTheDocument();
    });

    it('Should render recent-searches page and dropdown header should be visible ', () => {
        render(
            <SearchContextProvider>
                <RecentSearches />
            </SearchContextProvider>
        );

        const dropdownHeader = screen.getByTestId('dropdown-header');
        expect(dropdownHeader).toBeInTheDocument();
        expect(dropdownHeader.firstChild?.textContent).toBe('Recent Searches');
        const clearAllButton = dropdownHeader.childNodes[1];
        expect(clearAllButton).toBeVisible();
        expect(clearAllButton.textContent).toBe('Clear all');
    });

    it('Should render recent-searches page and dropdown list should be visible', () => {
        render(
            <SearchContextProvider>
                <RecentSearches />
            </SearchContextProvider>
        );

        const dropdownList = screen.getByTestId('dropdown-list');
        expect(dropdownList).toBeInTheDocument();
    });

    it('Should render recent-searches page and dropdown list should render no results component', () => {
        render(
            <SearchContextProvider>
                <RecentSearches />
            </SearchContextProvider>
        );

        const dropdownList = screen.getByTestId('dropdown-list');
        expect(dropdownList).toBeInTheDocument();
        expect(dropdownList.children.length).toBe(1);
        expect(dropdownList.firstElementChild).toHaveClass(
            'noResults__wrapper'
        );
        expect(dropdownList.firstElementChild?.firstChild?.textContent).toBe(
            'No searches found.'
        );
    });
});

export {};
