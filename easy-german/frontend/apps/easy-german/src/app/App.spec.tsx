import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';
import '@testing-library/jest-dom';

describe('app', () => {
  it('Should render app component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const appElement = getByTestId('app');

    expect(appElement).toBeDefined();
  });
});
