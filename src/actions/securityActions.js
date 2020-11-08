import axios from "axios";
import { GET_ERRORS, SET_CURRENT_LOGIN } from "./types";
import setJWTToken from "../securityUtilis/setJWTToken";
import jwt_decode from "jwt-decode";


export const createNewLogin = (newLogin, history) => async dispatch =>{
    try {
        await axios.post (`http://localhost:8080/api/logins/register`, newLogin);
        history.push("/login");
        dispatchEvent({
        type: GET_ERRORS,
        payload: {}
    });
    } catch (err) {
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data
        });
    } 
};

export const login =LoginRequest => async dispatch => {
    try {
        //post => Login request
    const res = await axios.post(`http://localhost:8080/api/logins/login`, LoginRequest);

    //extract token from res.data
    const { token } = res.data;
    //store the token in the localStorage
    localStorage.setItem("jwtToken", token)
    //set our token in header ***
    setJWTToken(token);
    //decode token on React
    const decoded = jwt_decode(token);
    //dispatch to our securityReducer
    
    dispatch({
        type: SET_CURRENT_LOGIN,
        payload: decoded
    
    });

    } catch (err) {
       dispatch({
           type: GET_ERRORS,
           payload: err.response.data
       });
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    dispatch({
      type: SET_CURRENT_LOGIN,
      payload: {}
    });
  };