import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { categories } from '@/constants/categories';
import SearchResults from '@/pages/search-results';

// Mock queryClient and nextRouter
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('react-query', () => ({
    useQuery: jest
        .fn()
        .mockReturnValue({ data: {}, isLoading: false, error: {} })
}));

describe('Search-results Page scenario', () => {
    beforeAll(() => mockRouter.push('/search-results'));

    it('Should render search-results page successfully', () => {
        render(<SearchResults isError={false} />);

        expect(mockRouter).toMatchObject({
            asPath: '/search-results',
            pathname: '/search-results',
            query: {}
        });
    });

    it('Should render search-results page and headline should be visible', () => {
        render(<SearchResults isError={false} />);

        const heading = screen.getByRole('heading', {
            name: 'Find your favorite products now.'
        });
        expect(heading).toBeInTheDocument();
    });

    it('Should render search-results page and categories should be visible', () => {
        render(<SearchResults isError={false} />);

        const categories_ = screen.getByTestId('categories');
        expect(categories_).toBeInTheDocument();
        expect(categories_.childElementCount).toBe(4);
        expect(categories_.firstChild).toHaveClass('category__active');
        categories_.childNodes.forEach((category: ChildNode, index: number) => {
            expect(category.textContent).toBe(categories[index]);
        });
    });

    it('Should render search-results page and products should be visible', () => {
        render(<SearchResults isError={false} />);

        const products_ = screen.getByTestId('products');
        expect(products_).toBeInTheDocument();
        expect(products_.childElementCount).toBe(10);
    });
});

export {};
