const GET_CONTINENT = 'bookStore/books/GET_CONTINENT';

const initialState = null;

export const setContinent = (payload) => (
  {
    type: GET_CONTINENT,
    payload,
  }
);

const continentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENT:
      return action.payload;
    default:
      return state;
  }
};

export default continentReducer;
