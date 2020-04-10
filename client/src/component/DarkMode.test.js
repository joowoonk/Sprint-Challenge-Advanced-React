import React from 'react';
import ReactDOM from 'react-dom';
import DarkMode from './DarkMode';
import { render,fireEvent} from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DarkMode />, div);
  ReactDOM.unmountComponentAtNode(div);
});

