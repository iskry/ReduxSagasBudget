import axios from "axios";

export const addEntryRedux = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:3001/entries", payload);
      dispatch({ type: "ADD_ENTRY", payload: res.data });
    } catch (err) {
      console.error("Error adding entry", err);
    }
  };
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
