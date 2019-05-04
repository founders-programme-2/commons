import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import About from '.';

test('jest is working', () => {
  expect(true).toBeTruthy();
});

test('About component renders', () => {
  const isRendered = render(
    <Router>
      <About />
    </Router>
  );
  expect(isRendered).toBeTruthy();
});
