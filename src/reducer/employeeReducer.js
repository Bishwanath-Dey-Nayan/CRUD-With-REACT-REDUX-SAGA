import {
    FETCH_EMPLOYEES_ASYNC,
    EDIT_MODE,
    FETCH_EMPLOYEE_BY_ID,
    CLEAR_STATE,
    ADD_EMPLOYEE_ASYNC,
    EDIT_EMPLOYEE_ASYNC,
    DELETE_EMPLOYEE_ASYNC,
    FETCH_EMPLOYEES_ASYNC_ERROR,
    EDITED,ADD_EMPLOYEE_BUTTON_CLICKED
} from '../action/type';

const initialState = {
    employees:[],
    employee:{},
    editMode:false,
    error:false,
    isSaveBtnClicked:false,
    isEditBtnClicked:false,
    edit:false
}

export default function (state = initialState, action)
{
    switch (action.type) {
        case FETCH_EMPLOYEES_ASYNC:
            return{
                ...state,
                employees: action.payload,
                
            }

        case FETCH_EMPLOYEES_ASYNC_ERROR:
            return{
                ...state,
                error:true
            } 
        case ADD_EMPLOYEE_ASYNC:
            return{
                ...state,
                employees:state.employees.concat([action.payload]),
                edit:false
            } 
        case DELETE_EMPLOYEE_ASYNC:
            return{
                ...state,
                employees:state.employees.filter((employee) => employee.ID !== action.payload),
                edit:false
            }

        case EDIT_MODE:
            return{
                ...state,
                isEditBtnClicked:true
            }
        case FETCH_EMPLOYEE_BY_ID:
            return{
                ...state,
                employee:state.employees.find((emp) => emp.ID===action.payload)
            }

        case EDIT_EMPLOYEE_ASYNC:
            return{
              ...state,
              employee:action.payload,
              isEditBtnClicked:false,
              edit:true 
            }
        case EDITED:
            return{
                ...state,
                edit:true
            }
        case ADD_EMPLOYEE_BUTTON_CLICKED:
            return{
                edit:false
            }
        default:
            return state;    
        }
}