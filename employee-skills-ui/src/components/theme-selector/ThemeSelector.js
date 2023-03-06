import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { toggleThemeMode } from '../../redux';
import { useDispatch } from 'react-redux';
import { LIGHT_THEME } from '../../redux/theme/themeConstants';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/system';
import { Menu } from '@mui/material';
import React from 'react';
import ThemeIconMenu from './ThemIconMenu';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';

function ThemeSelector() {
    const theme = useSelector(state => state.theme.mode)
    const dispatch = useDispatch();
    const mode = theme === LIGHT_THEME ? <DarkModeIcon /> : <LightModeIcon />

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack direction='row' spacing={3} sx={{ml: 1}}>
            <div>
                <FormatColorFillIcon
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <ThemeIconMenu />
                </Menu>
            </div>
            <div onClick={() => dispatch(toggleThemeMode())}>
                {mode}
            </div>

        </Stack>
    )
}


export default ThemeSelector;