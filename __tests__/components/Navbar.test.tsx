import { NavBar } from '@/components';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';

// Mock queryClient and nextRouter
jest.mock('next/router', () => require('next-router-mock'));

describe('Navbar Component', () => {
    beforeAll(() => mockRouter.push('/search-results'));

    it('Should render navbar component', () => {
        render(<NavBar />);
        const navbar = screen.getByTestId('navbar');
        expect(navbar).toBeInTheDocument();
        expect(navbar).toHaveClass('navbar');
        const container = navbar.firstChild;
        expect(container?.childNodes.length).toBe(3);
    });
});
