import { GET_STAFFS, DELETE_STAFF, GET_STAFF } from "../actions/types";

const initialState = {
  staffs:[],   // here comma is important
  staff: {}   
};

//Switch Case
export default function(state = initialState, action) {
    switch (action.type) {
      case GET_STAFFS:
        return {
          ...state,
          staffs: action.payload    //important staffs not a staff
        };

        case GET_STAFF:
          return {
            ...state,
          staff: action.payload
          }

          case DELETE_STAFF:
          return {
            ...state,
          staffs: state.staffs.filter(staff=>staff.staffId !== action.payload)
          };
      default:
        return state;
    }
  }