import { FETCH_EMPLOYEE_FAILURE, FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, SELECT_EMPLOYEE } from "./employeeDataTypes"

const initialState = {
    loading: false,
    employees: [],
    error: ''
}

const employeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: action.payload,
                error: ''
            }
        case FETCH_EMPLOYEE_FAILURE:
            return {
                ...state,
                employees: [],
                error: action.payload
            }
        case SELECT_EMPLOYEE:
            return {
                ...state,
                employee: action.payload
            }
        default: return state
    }
}

export default employeeReducer;