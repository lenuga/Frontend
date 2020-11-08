import {SET_CURRENT_LOGIN} from "../actions/types";

const initialState = {
    validToken:false, 
    login: {}
    
}

const booleanActionPayload = (payload) =>{
    if(payload){
        return true
    } else {
        return false
    }
}

export default function(state = initialState, action){
 switch(action.type){

    case SET_CURRENT_LOGIN:

    return {
        ...state,
        validToken: booleanActionPayload(action.payload),
        user: action.payload
    }
    default:
    return state
 }
    
}