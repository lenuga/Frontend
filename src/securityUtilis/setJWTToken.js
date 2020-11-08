import axios from "axios";

const setJWTToken = token => {
    if(token){
        axios.defaults.headers.common["Athorization"] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"]
    }
};

export default setJWTToken;