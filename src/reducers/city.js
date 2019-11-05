import { SET_CITY } from './../actions';

export const city = (oldState = {},action) => {
    switch(action.type){
        case SET_CITY:
            return action.payload
        default:
            return oldState; 
     }
}