import { render, screen } from '@testing-library/react';
import SearchResults from '@/pages/search-results';

it('Should display Home Page', () => {
    render(<SearchResults />);
    expect(screen.getByRole('heading', { name: /find/i })).toBeInTheDocument();
});
