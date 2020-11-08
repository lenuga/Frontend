import { GET_HODS, DELETE_HOD, GET_HOD } from "../actions/types";

const initialState = {
  hods:[],   // here comma is important
  hod: {}   
};

//Switch Case
export default function(state = initialState, action) {
    switch (action.type) {
      case GET_HODS:
        return {
          ...state,
          hods: action.payload    //important lecturers not a lecturer
        };

        case GET_HOD:
          return {
            ...state,
          hod: action.payload
          }

          case DELETE_HOD:
          return {
            ...state,
          hods: state.hods.filter(hod=>hod.hodId !== action.payload)
          };
      default:
        return state;
    }
  }