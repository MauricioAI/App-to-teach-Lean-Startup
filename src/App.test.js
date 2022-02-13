import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lean startup', () => {
  render(<App />);
  const element = screen.getByText(/lean startup/i);
  expect(element).toBeInTheDocument();
});
