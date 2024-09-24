import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';  
import App from './App';

test('renders New Post text', () => {
  render(<App />);
  const newPostElement = screen.getByText(/New Post/i);
  expect(newPostElement).toBeInTheDocument();
});
