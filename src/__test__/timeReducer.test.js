import '@testing-library/jest-dom/extend-expect';
import timeReducer, { setGlobalTime } from '../__mock__/Redux/MockedState/mockTimeState';

const initialState = null;

expect(typeof setGlobalTime({ day: '17', month: '11' })).toEqual('object');

describe('time selection reducer function testing', () => {
  test('action return with object', () => {
    expect(typeof setGlobalTime({ day: '17', month: '11' })).toEqual('object');
  });
  test('If given payload to sucessfully change the state to it', () => {
    expect(timeReducer(initialState, setGlobalTime({ day: '17', month: '11' }))).toEqual({ day: '17', month: '11' });
  });
});
