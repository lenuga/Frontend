import axios from "axios";
import { GET_ERRORS, DELETE_HOD, GET_HODS , GET_HOD} from "./types";

export const createHod= (hod, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/hod/addhod", hod);
    history.push("/hoddashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getHods = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/hod/hods");
  dispatch({
    type: GET_HODS,
    payload: res.data
  });
};

  export const getHod =(id, history) => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8080/hod/${id}`);
    dispatch({
      type:GET_HOD,
      payload: res.data
    });
    } catch (error) {
      history.push("/hoddashboard");
    }
    
  };

  export const updateHod = (hod, history) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:8080/hod/update`, hod);
      history.push("/dashboard");
        console.log("hod");
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    } 
  };   


  export const deleteHod = id => async dispatch => {
    if (
      window.confirm(
        "Are you sure? This will delete the hod and all the data related to it"
      )
    ) {
      await axios.delete(`http://localhost:8080/hod/delete/${id}`);
      dispatch({
        type: DELETE_HOD,
        payload: id
      });
    }
  };