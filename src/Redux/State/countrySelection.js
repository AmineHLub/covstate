const GET_COUNTRY = 'bookStore/books/GET_COUNTRY';

const initialState = null;

export const setCountry = (payload) => (
  {
    type: GET_COUNTRY,
    payload,
  }
);

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return action.payload;
    default:
      return state;
  }
};

export default countryReducer;
