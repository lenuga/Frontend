import { GET_DEANS, DELETE_DEAN, GET_DEAN } from "../actions/types";

const initialState = {
  deans:[],   // here comma is important
  dean: {}   
};

//Switch Case
export default function(state = initialState, action) {
    switch (action.type) {
      case GET_DEANS:
        return {
          ...state,
          deans: action.payload    //important deans not a dean
        };

        case GET_DEAN:
          return {
            ...state,
          dean: action.payload
          }

          case DELETE_DEAN:
          return {
            ...state,
          deans: state.deans.filter(dean=>dean.deanId !== action.payload)
          };
      default:
        return state;
    }
  }