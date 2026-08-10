// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoCrew title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AutoCrew/i);
    expect(titleElement).toBeInTheDocument();
});
