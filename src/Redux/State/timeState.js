const GET_TIME = 'bookStore/books/GET_TIME';

const initialState = null;

export const setGlobalTime = (payload) => (
  {
    type: GET_TIME,
    payload,
  }
);

const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TIME:
      return action.payload;
    default:
      return state;
  }
};

export default timeReducer;
