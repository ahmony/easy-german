import { fireEvent, render } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import '@testing-library/jest-dom';
import 'jest';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => jest.fn(),
}));

describe('Sidebar', () => {
  it('Initial selected menu item should be set to diary', () => {
    const { getByTestId } = render(<Sidebar />);
    const diaryMenuItem = getByTestId('diary-menu-item');

    expect(diaryMenuItem).toBeInTheDocument();
    expect(diaryMenuItem).toHaveClass('Mui-selected');
  });

  it('Calling onMenuItemChange should change selected menu item to desired value', () => {
    const { getByTestId } = render(<Sidebar />);
    const playgroundMenuItem = getByTestId('playground-menu-item');
    const diaryMenuItem = getByTestId('diary-menu-item');

    fireEvent.click(playgroundMenuItem);

    expect(playgroundMenuItem).toBeInTheDocument();
    expect(playgroundMenuItem).toHaveClass('Mui-selected');

    expect(diaryMenuItem).toBeInTheDocument();
    expect(diaryMenuItem).not.toHaveClass('Mui-selected');
  });
});
