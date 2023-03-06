import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const menus = [
    { name: "Home",  path: "/"},
    { name: "Employee",  path: "/employee-details"},
];

function NavbarMenu() {
    return (
        <Box sx={{  display: { xs: 'none', md: 'flex'}, ml: 5}}>
        {menus.map((menu) => (
          <Button
            key={menu.name}
            href={menu.path}
            variant="text"
            sx={{ my: 2, color: 'white', px: 2, pb: 1.5}}
          >
           <Typography variant="subtitle1" component="h2">
            {menu.name}
        </Typography>
          </Button>
        ))}
      </Box>
    )
}

export default NavbarMenu;