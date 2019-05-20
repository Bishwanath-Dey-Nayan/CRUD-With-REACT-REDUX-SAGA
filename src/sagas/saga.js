import {takeEvery,call,put} from 'redux-saga/effects';
import {FETCH_EMPLOYEES, FETCH_EMPLOYEES_ASYNC, FETCH_EMPLOYEES_ASYNC_ERROR,ADD_EMPLOYEE,ADD_EMPLOYEE_ASYNC} from '../action/type';
import {fetchEmployees} from './api';


export default function* rootWatcher()
{
    yield takeEvery(FETCH_EMPLOYEES,fetchEmployeeAsync);
    yield takeEvery(ADD_EMPLOYEE,addEmployeeAsync);
}

function* fetchEmployeeAsync(){
    const data = yield call(fetchEmployees);  
    if(data === "json failed"){
        yield put({ type: FETCH_EMPLOYEES_ASYNC_ERROR, payload: data })
    }
    else{
        yield put({ type: FETCH_EMPLOYEES_ASYNC, payload: data })
    }    
}


function* addEmployeeAsync(action)
{
    const apiResult = yield fetch('http://localhost:56293/api/Employee',{
        method:'POST',
        headers:{
            'content-type':'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify(action.payload)
    })
    .then(res => res.json())
    .then(employee => {return employee})

    yield put({type:ADD_EMPLOYEE_ASYNC,payload:apiResult});
    
}