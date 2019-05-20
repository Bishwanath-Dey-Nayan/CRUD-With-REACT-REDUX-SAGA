import React from 'react';
import {connect} from 'react-redux';
import {fetchEmployees} from '../action/employeeAction';

class EmployeeList extends React.Component{
    componentDidMount()
    {
        this.props.fetchEmployees();
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
    fetchEmployees
})(EmployeeList);