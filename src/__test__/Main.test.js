import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import Main from '../components/Main';
import store from '../__mock__/Redux/configureStore';

describe('Main component rendering', () => {
  let MainApp;
  act(() => {
    MainApp = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Main />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
  });
  afterEach(() => {
    cleanup();
  });

  test('test for cases on day 17-11-2011', () => {
    const numberOfCases = screen.getByTestId('test-cases');
    expect(numberOfCases).toBeInTheDocument();
    expect(numberOfCases.innerHTML).toContain('251652276');
  });

  test('snapshot of Main page with mocked store page', () => {
    expect(MainApp).toMatchSnapshot();
  });
});
