import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render the card title', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText('Card title!');
    expect(titleElement).toBeInTheDocument();
  });

  it('should update the count when the button is clicked', () => {
    const { getByRole, getByTestId } = render(<App />);
    const buttonElement = getByRole('button', { name: 'Buy Now' });
    const countElement = getByTestId('count');
  
    expect(countElement.textContent).toBe('Count: 0');
  
    fireEvent.click(buttonElement);
  
    expect(countElement.textContent).toBe('Count: 1');
  });
});