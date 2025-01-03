import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Header from '../Header';


// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn()
}));

// Mock react-icons
jest.mock('react-icons/fa', () => ({
  FaAlignJustify: () => <div data-testid="menu-icon" />
}));

describe('Header Component', () => {
  const mockSetIsOpen = jest.fn();

  // Helper function to render component with router
  const renderHeader = (pathname: string) => {
    (useLocation as jest.Mock).mockReturnValue({ pathname });
    
    return render(
      <MemoryRouter>
        <Header setIsOpen={mockSetIsOpen} />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders header with user information', () => {
    renderHeader('/dashboard');
    
    expect(screen.getByText('Hello, Good afternoon')).toBeInTheDocument();
    expect(screen.getByText('Gina Pwa')).toBeInTheDocument();
    expect(screen.getByAltText('')).toHaveAttribute('src', '/dp.jpg');
  });

  test('toggles sidebar when menu icon is clicked', () => {
    renderHeader('/dashboard');
    
    const menuIcon = screen.getByTestId('menu-icon');
    fireEvent.click(menuIcon.parentElement!);
    
    expect(mockSetIsOpen).toHaveBeenCalled();
  });

  describe('displays correct title based on pathname', () => {
    test('shows "Home" for /dashboard path', () => {
      renderHeader('/dashboard');
      expect(screen.getByText('Home')).toBeInTheDocument();
    });

    test('shows "Loans" for /dashboard/loans path', () => {
      renderHeader('/dashboard/loans');
      expect(screen.getByText('Loans')).toBeInTheDocument();
    });

    test('shows "Loans" for /dashboard/loans/123 path', () => {
      renderHeader('/dashboard/loans/123');
      expect(screen.getByText('Loans')).toBeInTheDocument();
    });

    test('shows "Transactions" for other paths', () => {
      renderHeader('/dashboard/transactions');
      expect(screen.getByText('Transactions')).toBeInTheDocument();
    });
  });

  test('renders profile image with correct attributes', () => {
    renderHeader('/dashboard');
    
    const profileImage = screen.getByAltText('') as HTMLImageElement;
    expect(profileImage).toHaveClass('rounded-full', 'h-14', 'w-14', 'object-cover', 'cursor-pointer');
    expect(profileImage.src).toContain('/dp.jpg');
  });

  test('menu icon is only visible on smaller screens', () => {
    renderHeader('/dashboard');
    
    const menuContainer = screen.getByTestId('menu-icon').parentElement;
    expect(menuContainer).toHaveClass('block', 'xl:hidden');
  });

  test('correctly handles setIsOpen state toggle', () => {
    renderHeader('/dashboard');
    
    const menuIcon = screen.getByTestId('menu-icon');
    
    // First click
    fireEvent.click(menuIcon.parentElement!);
    expect(mockSetIsOpen).toHaveBeenCalledTimes(1);
    
    // Verify the callback pattern
    const setIsOpenCallback = mockSetIsOpen.mock.calls[0][0];
    expect(setIsOpenCallback(true)).toBe(false);
    expect(setIsOpenCallback(false)).toBe(true);
  });

  test('maintains layout structure', () => {
    renderHeader('/dashboard');
    
    // Check main container classes
    const mainContainer = screen.getByTestId('menu-icon').parentElement!.parentElement;
    expect(mainContainer).toHaveClass(
      'w-full',
      'py-[14px]',
      'px-4',
      'md:px-7',
      'lg:px-[28px]',
      'flex',
      'gap-2',
      'bg-white',
      'lg:gap-0',
      'items-center',
      'border-b',
      'border-grey-100'
    );

    // Check inner container structure
    const innerContainer = screen.getByText('Hello, Good afternoon').parentElement!.parentElement;
    expect(innerContainer).toHaveClass('flex', 'items-center', 'gap-2');
  });
});