import { DARK_THEME, LIGHT_THEME } from "./themeConstants";
import { TOGGELE } from "./themeTypes";

const initialState = {
    theme: "light"
}

const themeReducer = (state = initialState, action)  => {
    switch (action.type) {
        case TOGGELE: return {
            ...state,
            theme: state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
        } 
        default:
            return state;
    }
}

export default themeReducer;