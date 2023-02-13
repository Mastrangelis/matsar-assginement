import Search from '@/components/Navbar/Search';
import { render, screen } from '@testing-library/react';

describe('Search Component', () => {
    it('Should render Search component in full width', () => {
        render(<Search isMenuIcon={false} />);
        const search = screen.getByTestId('search');
        expect(search).toBeInTheDocument();
        expect(search.children.length).toBe(2);
        expect(search).toHaveClass('navbar__searchFull');
    });

    it('Should render Search component not in full width', () => {
        render(<Search isMenuIcon={true} />);
        const search = screen.getByTestId('search');
        expect(search).toBeInTheDocument();
        expect(search.children.length).toBe(2);
        expect(search).not.toHaveClass('navbar__searchFull');
    });
});
