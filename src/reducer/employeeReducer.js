import {
    FETCH_EMPLOYEES_ASYNC,
    EDIT_MODE,
    FETCH_EMPLOYEE_BY_ID,
    CLEAR_STATE,
    ADD_EMPLOYEE_ASYNC,
    EDIT_EMPLOYEE_ASYNC,
    DELETE_EMPLOYEE_ASYNC,
    FETCH_EMPLOYEES_ASYNC_ERROR
} from '../action/type';

const initialState = {
    employees:[],
    employee:{},
    editMode:false,
    error:false,
    isSaveBtnClicked:false
}

export default function (state = initialState, action)
{
    switch (action.type) {
        case FETCH_EMPLOYEES_ASYNC:
            return{
                ...state,
                employees: action.payload
            }

        case FETCH_EMPLOYEES_ASYNC_ERROR:
            return{
                ...state,
                error:true
            } 
        case ADD_EMPLOYEE_ASYNC:
            return{
                ...state,
                employees:state.employees.concat([action.payload])
            } 

        default:
            return state;    
        }
}