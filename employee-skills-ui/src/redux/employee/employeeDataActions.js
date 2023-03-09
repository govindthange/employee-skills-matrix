import axios from 'axios';
import { progressbarAction } from '../progress-bar/progressbarActions';
import { FETCH_EMPLOYEE_FAILURE, FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, SELECT_EMPLOYEE } from "./employeeDataTypes"

export const fetchEmployeeDataRequets = () => {
    return {
        type: FETCH_EMPLOYEE_REQUEST
    }
}

export const fetchEmployeeDataSuccess = employee => {
    return {
        type: FETCH_EMPLOYEE_SUCCESS,
        payload: employee
    }
}


export const fetchEmployeeDataFaiure = error => {
    return {
        type: FETCH_EMPLOYEE_FAILURE,
        payload: error
    }
}

export const selectEmployee = employee => {
    return {
        type: SELECT_EMPLOYEE,
        payload: employee
    }
}

export const fetchEmployeeData = () => {
    return (dispatch) => {
        console.log("FETCH--------");
        dispatch(fetchEmployeeDataRequets);
        dispatch(progressbarAction());
        axios.get("/api/employee")
            .then(res => {
                console.log(res.data.data);
                dispatch(fetchEmployeeDataSuccess(res.data.data))
                dispatch(progressbarAction());
            })
            .catch(err => {
                console.log(err);
                dispatch(progressbarAction());
                dispatch(fetchEmployeeDataFaiure([]))
            })
    }
}