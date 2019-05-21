import React from 'react';
import {connect} from 'react-redux';
import {fetchEmployees,deleteEmployee,editMode} from '../action/employeeAction';


class EmployeeList extends React.Component{
    componentDidMount()
    {
        this.props.fetchEmployees();
    }


    onEdit = (empID) =>
    {
        console.log(empID);
        this.props.editMode();

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
                <div>
                     <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Gender</th>
                        <th>Salary</th>
                        <th>Action</th>
                      
                        
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
                           <td><button onClick={() =>this.onEdit(u.ID)}>Edit</button></td>
                           <td><button onClick={()=>this.onDelete(u.ID)}>Delete</button></td>
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
    editMode
})(EmployeeList);