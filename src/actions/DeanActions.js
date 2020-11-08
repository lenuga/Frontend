import axios from "axios";
import { GET_ERRORS, DELETE_DEAN, GET_DEANS , GET_DEAN} from "./types";

export const createDean= (dean, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/dean/adddean", dean);
    history.push("/deandashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getDeans = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/dean/deans");
  dispatch({
    type: GET_DEANS,
    payload: res.data
  });
};

  export const getDean =(id, history) => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8080/dean/${id}`);
    dispatch({
      type:GET_DEAN,
      payload: res.data
    });
    } catch (error) {
      history.push("/deandashboard");
    }
    
  };

  export const updateDean = (dean, history) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:8080/dean/update`, dean);
      history.push("/deandashboard");
        console.log("dean");
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    } 
  };   


  export const deleteDean = id => async dispatch => {
    if (
      window.confirm(
        "Are you sure? This will delete the dean and all the data related to it"
      )
    ) {
      await axios.delete(`http://localhost:8080/dean/delete/${id}`);
      dispatch({
        type: DELETE_DEAN,
        payload: id
      });
    }
  };