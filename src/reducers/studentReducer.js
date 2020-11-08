import { GET_STUDENTS, DELETE_STUDENT, GET_STUDENT } from "../actions/types";

const initialState = {
  students:[],   // here comma is important
  student: {}   
};

//Switch Case
export default function(state = initialState, action) {
    switch (action.type) {
      case GET_STUDENTS:
        return {
          ...state,
          students: action.payload    //important students not a student
        };

        case GET_STUDENT:
          return {
            ...state,
          student: action.payload
          };

          case DELETE_STUDENT:
          return {
            ...state,
          students:state.students.filter(student=>student.studentId !== action.payload)
          };
      default:
        return state;
    }
  }