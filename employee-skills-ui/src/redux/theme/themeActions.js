import { TOGGELE_MODE, TOGGLE_COLOR } from "./themeTypes"

export const toggleThemeMode = () => {
    return {
        type: TOGGELE_MODE
    }
}

export const toggleThemeColor = colorTheme => {
    return {
        type: TOGGLE_COLOR,
        payload: colorTheme
    }
}