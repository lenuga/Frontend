import axios from "axios";
import { GET_ERRORS, DELETE_STAFF, GET_STAFFS , GET_STAFF} from "./types";

export const createStaff= (staff, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/staff/addstaff", staff);
    history.push("/staffdashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getStaffs = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/staff/staffs");
  dispatch({
    type: GET_STAFFS,
    payload: res.data
  });
};

  export const getStaff =(id, history) => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8080/staff/${id}`);
    dispatch({
      type:GET_STAFF,
      payload: res.data
    });
    } catch (error) {
      history.push("/staffdashboard");
    }
    
  };

  export const updateStaff = (staff, history) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:8080/staff/update`, staff);
      history.push("/staffdashboard");
        console.log("staff");
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    } 
  };   


  export const deleteStaff = id => async dispatch => {
    if (
      window.confirm(
        "Are you sure? This will delete the staff and all the data related to it"
      )
    ) {
      await axios.delete(`http://localhost:8080/staff/delete/${id}`);
      dispatch({
        type: DELETE_STAFF,
        payload: id
      });
    }
  };