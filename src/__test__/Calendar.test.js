import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import Calendar from '../components/Calendar';
import store from '../Redux/configureStore';

describe('Calendar component', () => {
  let CalendarApp;
  act(() => {
    CalendarApp = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Calendar />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
  });
  afterEach(() => {
    cleanup();
  });

  test('date selectors', () => {
    const daySelector = screen.getByTestId('day-selector-test');
    const monthSelector = screen.getByTestId('month-selector-test');
    expect(daySelector).toBeInTheDocument();
    expect(monthSelector).toBeInTheDocument();
    expect(monthSelector.value).toEqual('MM');
  });

  test('snapshot of calendar page', () => {
    expect(CalendarApp).toMatchSnapshot();
  });
});
