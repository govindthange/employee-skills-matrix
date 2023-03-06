import { defaultThemeColor } from "../../utils/utils";
import { DARK_THEME, LIGHT_THEME } from "./themeConstants";
import { TOGGELE_MODE, TOGGLE_COLOR } from "./themeTypes";

const initialState = {
    mode: "LIGHT_THEME",
    theme: {primaryColor: defaultThemeColor.primacyColor, secondaryColor: defaultThemeColor.secondaryColor}
}

const themeReducer = (state = initialState, action)  => {
    switch (action.type) {
        case TOGGELE_MODE: return {
            ...state,
            mode: state.mode === LIGHT_THEME ? DARK_THEME : LIGHT_THEME,
        }
        case TOGGLE_COLOR: return {
            ...state,
            theme: action.payload
        }
        default:
            return state;
    }
}

export default themeReducer;