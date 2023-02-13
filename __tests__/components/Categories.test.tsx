import { Categories } from '@/components';
import { categories } from '@/constants/categories';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Categories Component', () => {
    it('Should render Categories component', () => {
        render(<Categories />);
        const categories_ = screen.getByTestId('categories');
        expect(categories_).toBeInTheDocument();
        expect(categories_.childElementCount).toBe(4);
    });

    it('Should render first category "Trendy Foods" as active', () => {
        render(<Categories />);
        const categories_ = screen.getByTestId('categories');
        categories_.childNodes.forEach((category: ChildNode, index: number) => {
            expect(category.textContent).toBe(categories[index]);
        });
        expect(categories_).toBeInTheDocument();
        expect(categories_.childElementCount).toBe(4);
        expect(categories_.firstChild?.textContent).toBe('Trendy Foods');
        expect(categories_.firstChild).toHaveClass('category__active');
    });

    it('Should be able to change category on click to "Bread"', () => {
        render(<Categories />);
        const categories_ = screen.getByTestId('categories');
        expect(categories_).toBeInTheDocument();
        expect(categories_.childElementCount).toBe(4);
        categories_.childNodes.forEach((category: ChildNode, index: number) => {
            expect(category.textContent).toBe(categories[index]);
        });

        const breadCategory = categories_.children[1];
        fireEvent.click(breadCategory);

        expect(breadCategory?.textContent).toBe('Bread');
        expect(categories_.firstChild).not.toHaveClass('category__active');
        expect(breadCategory).toHaveClass('category__active');
    });
});
