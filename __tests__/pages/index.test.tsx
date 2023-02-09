import { render, screen } from '@testing-library/react';
import Home from '../../pages';

it('Should display Home Page', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /learn/i })).toBeInTheDocument();
});
