import React from 'react';
import ReactDOM from 'react-dom';
import Players from './Players';
import { render,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

it('renders without crashing', async () => { 
    const { getByText } = await render(<Players />);
    const linkElement = getByText(/Country/i);
    expect(linkElement).toBeVisible();
});

it('renders without crashing', async () => { 
    const { getByText } = await render(<Players />);
    const linkElement = getByText(/Searches/i);
    expect(linkElement).toBeVisible();
});
