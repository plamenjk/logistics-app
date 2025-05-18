import { render, screen } from '@testing-library/react';
import App from './App';

test('показва заглавието на дашборда', () => {
  render(<App />);
  expect(screen.getByText(/Logistics Company Dashboard/i)).toBeInTheDocument();
});

