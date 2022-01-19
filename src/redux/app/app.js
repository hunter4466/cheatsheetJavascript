// ---------------- paths (Data) --------------------
const TRIGGER_FETCH = 'REDUX/APP/APP/TRIGGER_FETCH';
const STORE_INFO = 'REDUX/APP/APP/STORE_INFO';
const STORE_USER_INFO = 'REDUX/APP/APP/STORE_USER_INFO';
const CLEAR_REDUCER = 'REDUX/APP/APP/CLEAR_REDUCER';

// ---------------- Initial state ------------

// ---------------- Actions (Data) ------------------
const reduxActions = {
  triggerFetch: (payload) => ({
    type: TRIGGER_FETCH,
    payload,
  }),
  storeInfo: (payload) => ({
    type: STORE_INFO,
    payload,
  }),
  storeUserInfo: (payload) => ({
    type: STORE_USER_INFO,
    payload,
  }),
  clearReducer: (payload) => ({
    type: CLEAR_REDUCER,
    payload,
  }),
};

// ----------------- REDUCERS ------------

const mainDefaulState = {
  providerOne: [],
  providerTwo: [],
  providerThree: [],
};

const mainReducer = (state = mainDefaulState, action) => {
  const keys = Object.keys(state);
  const newObj = {};
  keys.forEach((e) => {
    newObj[e] = state[e];
  });
  const parseData = (data) => {
    const arr = newObj[data.provider];
    arr.push(data.data);
    return arr;
  };
  switch (action.type) {
    case STORE_INFO:
      newObj[action.payload.provider] = parseData(action.payload);
      return newObj;
    case CLEAR_REDUCER:
      return {
        providerOne: [],
        providerTwo: [],
        providerThree: [],
      };
    default:
      return state;
  }
};

const userInfoDefaultState = null;
const userReducer = (state = userInfoDefaultState, action) => {
  switch (action.type) {
    case STORE_USER_INFO:
      return action.payload;
    default:
      return state;
  }
};

// ---------------- Middlewares and Side Effects --------------
const fetchFromApiMiddleware = (store) => (next) => (action) => {
  if (action.type === TRIGGER_FETCH) {
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${action.payload}&tsyms=USD`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
      .then((json) => store.dispatch(reduxActions.storeInfo({ provider: 'providerOne', data: json })));

    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${action.payload}&tsyms=USD`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
      .then((json) => store.dispatch(reduxActions.storeInfo({ provider: 'providerTwo', data: json })));

    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${action.payload}&tsyms=USD`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
      .then((json) => store.dispatch(reduxActions.storeInfo({ provider: 'providerThree', data: json })));
  }
  next(action);
};
export {
  // ------ Reducers -------
  mainReducer,
  userReducer,
  // ------ Actions --------
  reduxActions,
  // ---- Middlewares -----
  fetchFromApiMiddleware,
};
