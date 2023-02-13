import { Spinner } from '@/components';
import { render, screen } from '@testing-library/react';

describe('Spinner Component', () => {
    it('Should render primary color spinner', () => {
        render(<Spinner />);
        const spinner = screen.getByTestId('spinner');
        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveClass('spinner__primary');
    });

    it('Should render secondary color spinner', () => {
        render(<Spinner color="secondary" />);
        const spinner = screen.getByTestId('spinner');
        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveClass('spinner__secondary');
    });

    it('Should render accent color spinner', () => {
        render(<Spinner color="accent" />);
        const spinner = screen.getByTestId('spinner');
        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveClass('spinner__accent');
    });
});
