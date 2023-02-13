import { Headline } from '@/components';
import { render, screen } from '@testing-library/react';

describe('Headline Component', () => {
    it('Should render Headline Component', () => {
        render(<Headline />);
        const headline = screen.getByTestId('headline');
        expect(headline).toBeInTheDocument();
        expect(headline).toHaveClass('headline');
    });
});
