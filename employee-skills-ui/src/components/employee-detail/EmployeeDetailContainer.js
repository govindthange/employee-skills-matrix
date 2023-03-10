import { Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeData } from "../../redux";
import DetailRender from "./DetailRenderer";
import ListRendere from "./ListRenderer";

function EmployeeDetailContainer() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEmployeeData())
      }, []);
    const employees = useSelector(state => state.employee.employees);

    return (
        <>
            <Box sx={{ flexGrow: 1, mt: 4 }}>
                <Grid container spacing={2}>
                    <Grid xs={3}>
                      <ListRendere employees={employees} />
                    </Grid>
                    <Grid xs={9}>
                        <DetailRender/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default EmployeeDetailContainer;