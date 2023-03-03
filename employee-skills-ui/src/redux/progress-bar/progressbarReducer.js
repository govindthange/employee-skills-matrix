import { HIDDEN, VISSBLE } from "./progressbarConstants";
import {TOGGLE} from './progressbarTypes';




const initialState = {
    visibility: HIDDEN
}

const progressbarReducer = (state = initialState, action)  => {
    switch (action.type) {
        case TOGGLE: return {
            ...state,
            visibility: state.visibility === HIDDEN ? VISSBLE : HIDDEN
        } 
        default:
            return state;
    }
}

export default progressbarReducer;