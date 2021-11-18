const GET_TIME = 'bookStore/books/GET_TIME';
const RESET_TIME = 'bookStore/books/RESET_TIME';

const initialState = { day: '17', month: '11' };

export const setGlobalTime = (payload) => (
  {
    type: GET_TIME,
    payload,
  }
);

export const resetTime = () => (
  {
    type: RESET_TIME,
  }
);

const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TIME:
      return action.payload;
    case RESET_TIME:
      return null;
    default:
      return state;
  }
};

export default timeReducer;
