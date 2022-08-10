import { USER_SEARCH_FAILED ,USER_SEARCH,USER_SEARCH_SUCCESS} from "./type";

 const initialState = {
 recipes :{}
 };
 
 export const userReducer = (state = initialState, action) => {
   const { type, payload } = action;
 
   switch (type) {
     case USER_SEARCH:
        return{
        ...state,
        loading:true
        }
       case USER_SEARCH_SUCCESS:
       return {
        ...state,
        recipes:payload,
        loading:false
       }
    
       case USER_SEARCH_FAILED:
        return {
         ...state,
         recipes:{},
         loading:false
        }
     
       default:
        return state;
    }
  };