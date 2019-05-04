import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from 'react-testing-library';
import Methods from '.';
import { MyProvider } from '../../../Context/ContextComponent';

test('Does Methods component render', () => {
  const isRendered = render(
    <MyProvider>
      <Router>
        <Methods />
      </Router>
    </MyProvider>
  );
  expect(isRendered).toBeTruthy();
});

describe('Integration test for selecting resources', () => {
  // render Methods component and destructure necessary methods
  const { getByLabelText, getAllByText, getAllByTestId } = render(
    <MyProvider>
      <Router>
        <Methods />
      </Router>
    </MyProvider>
  );
  // select the checkbox of first method card
  const checkbox = getByLabelText('Use this resource:');

  // select the method card for Network map
  const networkMapCheckbox = getAllByTestId('Network map')[0];

  test('Should start with 15 resources', () => {
    expect(getAllByText(/Remaining resources: 15/)).toBeTruthy();
  });

  test('Checking the box of the first method card should minus 2 from resources', () => {
    // simulate checking the checkbox!
    fireEvent.click(checkbox);
    expect(getAllByText(/Remaining resources: 13/)).toBeTruthy();
  });

  test('Unchecking the box of the first method card should return 2 to resources', () => {
    // simulate checking the checkbox!
    fireEvent.click(checkbox);
    expect(getAllByText(/Remaining resources: 15/)).toBeTruthy();
  });

  test('Checking the box of Network map should minus 3 from resources', () => {
    fireEvent.click(networkMapCheckbox);
    expect(getAllByText(/Remaining resources: 12/)).toBeTruthy();
  });

  test('Unchecking the box of Network map should return 3 to resources', () => {
    fireEvent.click(networkMapCheckbox);
    expect(getAllByText(/Remaining resources: 15/)).toBeTruthy();
  });
});
