import {FETCH_EMPLOYEES,ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE, EDIT_MODE} from './type';



export const fetchEmployees = ()=>({
    type:FETCH_EMPLOYEES
});


export const addEmployee = (employee)=>
(
    {
        type:ADD_EMPLOYEE,
        payload:employee
    }
)

export const editEmployee = (employee) =>
({
    type:EDIT_EMPLOYEE,
    payload:employee

})

export const deleteEmployee = (empID) =>
(
    {
        type:DELETE_EMPLOYEE,
        payload:empID
    }
)

export const editMode = () =>
(
    {
        type:EDIT_MODE
    }
)