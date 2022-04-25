// state
const initialState = [];

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_ROCKET:
    //   return action.payload;
    // case BOOK_ROCKET:
    //   return reserveCancelRocket(state, action.payload);
    default:
      return state;
  }
};

export default reducer;