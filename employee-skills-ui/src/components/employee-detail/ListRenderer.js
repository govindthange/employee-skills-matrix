import * as React from 'react';
import { Divider, InputAdornment, List, ListItemButton, ListItemIcon, ListItemText, Paper, TextField } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useDispatch } from 'react-redux';
import { selectEmployee } from '../../redux';
import SearchIcon from '@mui/icons-material/Search';

function ListRendere({ employees }) {

    const dispatch =  useDispatch();
    const [selectedIndex, setSelectedIndex] = React.useState();
    const [emplist, upDateEmployee] = React.useState(employees);

  

    React.useEffect(() => {
        upDateEmployee(employees.filter((e) => e.name.toLowerCase().includes((document.getElementById('filter-text-box').value).toLowerCase())));
    }, [employees])

    const handleListItemClick = (event, emp, index) => {
        setSelectedIndex(index);
        dispatch(selectEmployee(emp))
    };

    const onFilterTextBoxChanged = React.useCallback(() => {
        upDateEmployee(employees.filter((e) => e.name.toLowerCase().includes((document.getElementById('filter-text-box').value).toLowerCase())));
        dispatch(selectEmployee())
      }, []);


    const empNameList = emplist.map((emp, index) => {
        return (
            <div key={`${emp.name}-div-${index}`}  >

                <ListItemButton
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, emp, index)}
                    key={index}
                >
                    <ListItemIcon  key={`${emp.name}-icon-${index}`}>
                        <AccountCircleOutlinedIcon  key={`${emp.name}-acc-icon-${index}`}/>
                    </ListItemIcon>
                    <ListItemText primary={emp.name} secondary={emp.designation}  key={`${emp.name}-text-${index}`}/>
                </ListItemButton>
                <Divider  key={`${emp.name}-divider-${index}`}/>
            </div>
        );
    });
    return (
        <Paper variant="elevation" sx={{p: 2, height: "85vh"}} elevation={2}>
            <div style={{ padding: '1rem 0em' }} key="search-field">
                <TextField
                    fullWidth
                    id="filter-text-box"
                    label="search"
                    variant="outlined"
                    onInput={onFilterTextBoxChanged}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            <SearchIcon color="secondary"/>
                        </InputAdornment>,
                      }}
                />
            </div>
            <List component="nav" sx={{overflow: 'auto', height: '88%'}}>
                {empNameList}
            </List>
        </Paper>
    )
}

export default ListRendere;