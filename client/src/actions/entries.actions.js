import axios from "axios";

export const addEntryRedux = (payload) => {
  return { type: "ADD_ENTRY", payload };
};

export const removeEntryRedux = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/entries/${id}`);
      dispatch({ type: "REMOVE_ENTRY", payload: { id } });
    } catch (err) {
      console.error("Error deleting entry", err);
    }
  };
};
