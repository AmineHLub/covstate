import Axios from 'axios';

const GET_TOTAL = 'bookStore/books/GET_TOTAL';

export const fetchTotal = (date) => async (dispatch) => {
  const baseUrl = `https://api.covid19tracking.narrativa.com/api/2021-${date.month}-${date.day}/country/Total`;
  const response = await Axios.get(baseUrl);
  dispatch({
    type: GET_TOTAL,
    payload: response.data,
  });
};

const initialState = {};

const totalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL:
      return action.payload;
    default:
      return state;
  }
};

export default totalReducer;
