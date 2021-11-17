import Axios from 'axios';

const GET_COUNTRY_STATS = 'bookStore/books/GET_COUNTRY_STATS';
const RESET_COUNTRY_STATS = 'bookStore/books/RESET_COUNTRY_STATS';

export const fetchCountryStats = (date, country) => async (dispatch) => {
  const baseUrl = `https://api.covid19tracking.narrativa.com/api/2021-${date.day}-${date.month}/country/${country}`;
  const response = await Axios.get(baseUrl);
  dispatch({
    type: GET_COUNTRY_STATS,
    payload: response.data,
  });
};

export const resetCountryStats = (payload) => (
  {
    type: RESET_COUNTRY_STATS,
    payload,
  }
);

const initialState = null;

const countryStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_STATS:
      return action.payload;
    case RESET_COUNTRY_STATS:
      return action.payload;
    default:
      return state;
  }
};

export default countryStatsReducer;
