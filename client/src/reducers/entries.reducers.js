const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      if (action.payload) return [...state, action.payload];
      return state;
    case "REMOVE_ENTRY":
      if (action.payload && action.payload.id)
        return state.filter((entry) => entry.id !== action.payload.id);
      return state;
    case "SET_ENTRIES":
      return action.payload;
    case "UPDATE_ENTRIES":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
