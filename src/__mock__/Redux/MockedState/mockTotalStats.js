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

const initialState = {
  dates: {
    '2021-11-11': {
      countries: {},
      info: {
        date: '2021-11-11 00:00CET',
        date_generation: '2021-11-13 23:58',
        yesterday: '2021-11-10 00:00CET',
      },
    },
  },
  metadata: {
    by: 'Narrativa & AppliedXL',
    url: [
      'wwww.narrativa.com',
      'www.appliedxl.com',
    ],
  },
  total: {
    date: '2021-11-11',
    name: 'Total',
    name_es: 'Total',
    name_it: 'Total',
    rid: '#total',
    source: 'Narrativa',
    today_confirmed: 251652276,
    today_deaths: 5076959,
    today_new_confirmed: 521140,
    today_new_deaths: 7913,
    today_new_open_cases: 507912,
    today_new_recovered: 5315,
    today_open_cases: 102332083,
    today_recovered: 144243234,
    today_vs_yesterday_confirmed: 0.002075170798415016,
    today_vs_yesterday_deaths: 0.0015610432416670594,
    today_vs_yesterday_open_cases: 0.004988128015301907,
    today_vs_yesterday_recovered: 0.00003684884000576538,
    yesterday_confirmed: 251131136,
    yesterday_deaths: 5069046,
    yesterday_open_cases: 101824171,
    yesterday_recovered: 144237919,
  },
  updated_at: '2021-11-13 22:58UTC',
};

const totalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL:
      return action.payload;
    default:
      return state;
  }
};

export default totalReducer;
