import { Layout } from '@/components';
import { render, screen } from '@testing-library/react';

describe('Layout Component', () => {
    it('Should render Layout Component', () => {
        render(
            <Layout>
                <div>Layout</div>
            </Layout>
        );
        const layout = screen.getByTestId('layout');
        expect(layout).toBeInTheDocument();
        expect(layout.children.length).toBe(1);
        expect(layout).toHaveClass('layout');
        expect(layout.children[0].textContent).toBe('Layout');
    });
});
