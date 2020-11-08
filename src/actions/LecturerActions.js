import axios from "axios";
import { GET_ERRORS, DELETE_LECTURER, GET_LECTURERS , GET_LECTURER} from "./types";

export const createLecturer= (lecturer, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/lecturer/addlecturer", lecturer);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getLecturers = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/lecturer/lecturers");
  dispatch({
    type: GET_LECTURERS,
    payload: res.data
  });
};

  export const getLecturer =(id, history) => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8080/lecturer/${id}`);
    dispatch({
      type:GET_LECTURER,
      payload: res.data
    });
    } catch (error) {
      history.push("/dashboard");
    }
    
  };

  export const updateLecturer = (lecturer, history) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:8080/lecturer/update`, lecturer);
      history.push("/dashboard");
        console.log("lecturer");
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    } 
  };   


  export const deleteLecturer = id => async dispatch => {
    if (
      window.confirm(
        "Are you sure? This will delete the lecturer and all the data related to it"
      )
    ) {
      await axios.delete(`http://localhost:8080/lecturer/delete/${id}`);
      dispatch({
        type: DELETE_LECTURER,
        payload: id
      });
    }
  };