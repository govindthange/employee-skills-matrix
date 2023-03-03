import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {toggleTheme} from '../../redux';
import { useDispatch} from 'react-redux';
import { LIGHT_THEME } from '../../redux/theme/themeConstants';

import { useSelector } from 'react-redux';

function ThemeSelector() {
    const theme = useSelector(state => state.theme.theme)
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(toggleTheme())}>
         {
            theme === LIGHT_THEME ? <DarkModeIcon /> : <LightModeIcon />
         }
        </div>
    )
}


export default ThemeSelector;