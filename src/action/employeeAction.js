import {FETCH_EMPLOYEES,ADD_EMPLOYEE} from './type';



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