import { act, render, screen } from '@testing-library/react';
import App from './App';
import ReactDOMClient from 'react-dom/client';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Next Question/i);
  expect(linkElement).toBeInTheDocument();
});
