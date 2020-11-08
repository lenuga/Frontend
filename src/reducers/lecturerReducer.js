import { GET_LECTURERS, DELETE_LECTURER, GET_LECTURER } from "../actions/types";

const initialState = {
  lecturers:[],   // here comma is important
  lecturer: {}   
};

//Switch Case
export default function(state = initialState, action) {
    switch (action.type) {
      case GET_LECTURERS:
        return {
          ...state,
          lecturers: action.payload    //important lecturers not a lecturer
        };

        case GET_LECTURER:
          return {
            ...state,
          lecturer: action.payload
          }

          case DELETE_LECTURER:
          return {
            ...state,
          lecturers: state.lecturers.filter(lecturer=>lecturer.lecturerId !== action.payload)
          };
      default:
        return state;
    }
  }