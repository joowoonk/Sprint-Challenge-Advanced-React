import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render,fireEvent} from '@testing-library/react';

test('renders header', () => {

  const { getByText } = render(<App />);
 
  const linkElement = getByText("Loading...");
  expect(linkElement).toBeTruthy();
});