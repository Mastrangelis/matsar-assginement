import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import RecentSearches from '@/pages/recent-searches';
import { SearchContextProvider } from '@/context/SearchContext';
import { fireEvent } from '@testing-library/react';

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

    it('Should render recent-searches page and be able to search by typing "fanta" in search input and submitting form', async () => {
        render(
            <SearchContextProvider>
                <RecentSearches />
            </SearchContextProvider>
        );

        const search = screen.getByTestId('search');
        expect(search).toBeInTheDocument();
        expect(search.children.length).toBe(2);

        const input = screen.getByPlaceholderText('Search Product');
        fireEvent.change(input, { target: { value: 'fanta' } });

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        const dropdownList = screen.getByTestId('dropdown-list');
        expect(dropdownList).toBeInTheDocument();
        expect(dropdownList.children.length).toBe(1);

        expect(dropdownList.firstChild?.textContent).toBe('fanta');
    });

    it('Should render recent-searches page and be able to type "sprite" as new term and then clear it by clicking clear icon', async () => {
        render(
            <SearchContextProvider>
                <RecentSearches />
            </SearchContextProvider>
        );

        const search = screen.getByTestId('search');
        expect(search).toBeInTheDocument();
        expect(search.children.length).toBe(2);

        const input = screen.getByPlaceholderText('Search Product');
        fireEvent.change(input, { target: { value: 'sprite' } });

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        const dropdownList = screen.getByTestId('dropdown-list');
        expect(dropdownList).toBeInTheDocument();
        expect(dropdownList.firstChild?.textContent).toBe('fanta');

        expect(dropdownList.children.length).toBe(2);

        const spriteElement = dropdownList.children[1];
        expect(spriteElement.textContent).toBe('sprite');
        fireEvent.click(spriteElement.children[1]);

        expect(dropdownList.children.length).toBe(1);
    });

    it('Should render recent-searches page and be able remove all terms by clicking "Clear All" button', async () => {
        render(
            <SearchContextProvider>
                <RecentSearches />
            </SearchContextProvider>
        );

        const search = screen.getByTestId('search');
        expect(search).toBeInTheDocument();
        expect(search.children.length).toBe(2);

        const input = screen.getByPlaceholderText('Search Product');
        fireEvent.change(input, { target: { value: 'coca cola' } });

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        const dropdownList = screen.getByTestId('dropdown-list');
        expect(dropdownList).toBeInTheDocument();
        expect(dropdownList.firstChild?.textContent).toBe('fanta');
        expect(dropdownList.lastChild?.textContent).toBe('coca cola');
        expect(dropdownList.children.length).toBe(2);

        const dropdownHeader = screen.getByTestId('dropdown-header');
        expect(dropdownHeader).toBeInTheDocument();
        expect(dropdownHeader.firstChild?.textContent).toBe('Recent Searches');
        expect(dropdownHeader.children[1].textContent).toBe('Clear all');

        fireEvent.click(dropdownHeader.children[1]);

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
