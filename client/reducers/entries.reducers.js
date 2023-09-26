export default (state = entries, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      if (action.payload) state = [...state, action.payload];
      break;
    case "REMOVE_ENTRY":
      if (action.payload && action.payload.id)
        state = state.filter((entry) => entry.id !== action.payload.id);
      break;
    default:
      return state;
  }
  return state;
};
