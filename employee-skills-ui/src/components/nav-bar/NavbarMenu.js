import { Button, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';

const menus = [
    { name: "home", icon: <HomeIcon/>,  path: "/"},
    { name: "employee", icon: <PeopleIcon/>,  path: "/employee-details"},
];

function NavbarMenu() {
    return (
        <Box sx={{  display: { xs: 'none', md: 'flex'}, ml: 5}}>
        {menus.map((menu) => (
        <IconButton
          key={menu.name}
          sx={{ my: 2, color: 'white', px: 2, pb: 1.5}}
          href={menu.path}
          >
          {menu.icon}
        </IconButton>
        ))}
      </Box>
    )
}

export default NavbarMenu;