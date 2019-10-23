import { SET_CITY } from './../actions';

export const city = (oldState,action) => {
    switch(action.type){
        case SET_CITY:
            return {...oldState, city: action.payload}
        default:
            break;   
     }
  return oldState;
}