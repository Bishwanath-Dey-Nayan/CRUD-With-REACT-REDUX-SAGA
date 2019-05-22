import React from 'react';
import {connect} from 'react-redux';
import {fetchEmployees,deleteEmployee,editMode,fetchEmployeesById} from '../action/employeeAction';
import '../../src/App.css';


class EmployeeList extends React.Component{
    componentDidMount()
    {
        this.props.fetchEmployees();
    }


    onEdit = (empID) =>
    {
        console.log(empID);

        this.props.editMode();
        this.props.fetchEmployeesById(empID);

    }

    onDelete = (empID) =>
    {
        this.props.deleteEmployee(empID);
    }


    render()
    {
        let employees = this.props.Employees;
        console.log(employees);
       
            return(
                <div className='App'>
                     <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Gender</th>
                        <th>Salary</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      
                        
                    </tr>
                </thead>
                <tbody>
                   {this.props.Employees.map(u =>
                
                       <tr key={u.ID}>
                          <td>{u.ID}</td>
                           <td>{u.FirstName}</td>
                           <td>{u.LastName}</td>
                           <td>{u.Gender}</td>
                           <td>{u.Salary}</td>
                           <td><button  onClick={() =>this.onEdit(u.ID)}>Edit</button></td>
                           <td><button  onClick={()=>this.onDelete(u.ID)}>Delete</button></td>
                       </tr>
                   )}
               </tbody>
            </table>
                </div>
            );
        }
        
        
    }


const mapStateToProps = (state)=>
(
    {
        Employees:state.employeeReducer.employees,
        error:state.employeeReducer.error
    }
)

export default connect(mapStateToProps,{
    fetchEmployees,
    deleteEmployee,
    editMode,
    fetchEmployeesById
})(EmployeeList);