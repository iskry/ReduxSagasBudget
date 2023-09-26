const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      if (action.payload) return [...state, action.payload];
      break;
    case "REMOVE_ENTRY":
      if (action.payload && action.payload.id)
        return state.filter((entry) => entry.id !== action.payload.id);
      break;
    default:
      return state;
  }
  return state;
};

export default reducer;
