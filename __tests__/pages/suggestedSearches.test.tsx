import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { SearchContextProvider } from '@/context/SearchContext';
import { fireEvent } from '@testing-library/react';
import SearchSuggestions from '@/pages/search-suggestions';

// Mock queryClient and nextRouter
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('react-query', () => ({
    useQuery: jest
        .fn()
        .mockReturnValue({ data: {}, isLoading: false, error: {} })
}));

describe('Suggested Searches Page scenario', () => {
    beforeAll(() => mockRouter.push('/search-suggestions'));

    it('Should render suggested-searches page successfully', () => {
        render(
            <SearchContextProvider>
                <SearchSuggestions isError={false} />
            </SearchContextProvider>
        );

        expect(mockRouter).toMatchObject({
            asPath: '/search-suggestions',
            pathname: '/search-suggestions',
            query: {}
        });
    });

    it('Should render suggested-searches page and dropdown should be visilbe', () => {
        render(
            <SearchContextProvider>
                <SearchSuggestions isError={false} />
            </SearchContextProvider>
        );

        const dropdown = screen.getByTestId('dropdown');
        expect(dropdown).toBeInTheDocument();
    });

    it('Should render suggested-searches page and dropdown header should be visible ', () => {
        render(
            <SearchContextProvider>
                <SearchSuggestions isError={false} />
            </SearchContextProvider>
        );

        const dropdownHeader = screen.getByTestId('dropdown-header');
        expect(dropdownHeader).toBeInTheDocument();
        expect(dropdownHeader.firstChild?.textContent).toBe('Popular Searches');

        const clearAllButton = dropdownHeader.childNodes[1];
        expect(clearAllButton).toBeUndefined();
    });

    it('Should render suggested-searches page and dropdown list should be visible', () => {
        render(
            <SearchContextProvider>
                <SearchSuggestions isError={false} />
            </SearchContextProvider>
        );

        const dropdownList = screen.getByTestId('dropdown-list');
        expect(dropdownList).toBeInTheDocument();
    });

    it('Should render suggested-searches page and dropdown list should render no results component', () => {
        render(
            <SearchContextProvider>
                <SearchSuggestions isError={false} />
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

    it('Should render search-suggestions page and be able to search by typing "fanta" in search input and submitting form', async () => {
        render(<SearchSuggestions isError={false} />, {
            wrapper: SearchContextProvider
        });

        const search = screen.getByTestId('search');
        expect(search).toBeInTheDocument();
        expect(search.children.length).toBe(2);

        const input = screen.getByPlaceholderText('Search Product');
        fireEvent.change(input, { target: { value: 'fanta' } });

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockRouter).toMatchObject({
            asPath: '/search-suggestions?q=fanta',
            pathname: '/search-suggestions',
            query: {
                q: 'fanta'
            }
        });
    });
});

export {};
