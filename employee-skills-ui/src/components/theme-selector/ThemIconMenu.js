import * as React from 'react';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import {  Stack } from '@mui/system';
import CircleIcon from '@mui/icons-material/Circle';
import { amber, blueGrey, deepPurple, green, indigo, pink, purple } from '@mui/material/colors';
import ColorIcon from './ColorIcon';
import { useDispatch } from 'react-redux';
import { toggleThemeColor } from '../../redux';

export default function ThemeIconMenu() {
  const dispatch = useDispatch();
  // const mode = useSelector(state.theme.mode) === LIGHT_THEME ? 'light' : 'dark';
  
  return (
    <Stack sx={{ width: 320, maxWidth: '100%'}}>
      <MenuList>
        <MenuItem onClick={() => dispatch(toggleThemeColor({primaryColor: deepPurple[500], secondaryColor: amber[500]}))}>
          <ListItemIcon >
            <CircleIcon fontSize="small" style={{color: deepPurple[500]}}/>
          </ListItemIcon>
          <ListItemText>Deep Purle and Amber</ListItemText>
            <ColorIcon primaryColor={deepPurple[500]} secondaryColor={amber[500]}/>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => dispatch(toggleThemeColor({primaryColor: indigo[500], secondaryColor: pink[500]}))}>
          <ListItemIcon>
            <CircleIcon fontSize="small" style={{color: indigo[500]}}/>
          </ListItemIcon>
          <ListItemText>Indigo and Pink</ListItemText>
          <ColorIcon primaryColor={indigo[500]} secondaryColor={pink[500]}/>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => dispatch(toggleThemeColor({primaryColor: pink[500], secondaryColor: blueGrey[500]}))}>
          <ListItemIcon>
            <CircleIcon fontSize="small" style={{color: pink[500]}}/>
          </ListItemIcon>
          <ListItemText>Pink and Blue-grey</ListItemText>
          <ColorIcon primaryColor={pink[500]} secondaryColor={blueGrey[500]}/>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => dispatch(toggleThemeColor({primaryColor: purple[500], secondaryColor: green[500]}))}>
          <ListItemIcon>
            <CircleIcon fontSize="small" style={{color: purple[500]}}/>
          </ListItemIcon>
          <ListItemText>Purple and Green</ListItemText>
          <ColorIcon primaryColor={purple[500]} secondaryColor={green[500]}/>
        </MenuItem>
      </MenuList>
    </Stack>
  );
}