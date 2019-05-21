import React from 'react';
import { connect } from 'react-redux';
import {editEmployee} from '../action/employeeAction';
import Empolyee from './Empolyee';


class EmployeeEdit extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            ID:'',
            FirstName: '',
            LastName : '',
            Gender : '',
            Salary : ''
        }
    }

    componentDidMount()
    {
        let employee = this.props.employee;
        this.setState({
            ID:employee.ID,
            FirstName:employee.FirstName,
            LastName:employee.LastName,
            Gender:employee.Gender,
            Salary:employee.Salary
        })
    }

    onSubmit = (e) =>
    {
        console.log("onsubmit");
        e.preventDefault();
        // const FirstName = this.getFirstName.value;
        // const LastName = this.getLastName.value;
        // const Gender = this.getGender.value;
        // const Salary = this.getSalary.value;
        const ID = this.state.ID;
        const FirstName = this.state.FirstName;
        const LastName = this.state.LastName;
        const Gender = this.state.Gender;
        const Salary = this.state.Salary;

        const employee = {
            ID,
            FirstName,
            LastName,
            Gender,
            Salary
        }

        this.props.editEmployee(employee);
       
    }

    render()
    {
        console.log(this.state);
        return(
            <div>
                <h3>Edit</h3>
                <form onSubmit={this.onSubmit}>
                    <label>First Name</label> <br />
                    <input required type="text" 
                    value={this.state.FirstName}
                     onChange={(e)=>{this.setState({FirstName:e.target.value})}} />
                     <br />
                    <label>Last Name</label><br />
                    <textarea required
                     value={this.state.LastName}
                     onChange={(e)=>{this.setState({LastName:e.target.value})}}
                     />
                      <br />
                    <select ref={(input) => this.getGender=input}
                    onChange={(e)=>{this.setState({Gender:e.target.value})}} 
                    value={this.state.Gender} 
                    required>
                    <option value="" disabled selected>Choose a salutation ...</option>
                    <option value = "Male">Male</option>
                    <option value = "Female">Female</option>
                    </select><br />
                    <label>Salary</label><br />
                    <input required type="number"
                     value={this.state.Salary}
                     onChange={(e)=>{this.setState({Salary:e.target.value})}}
                     />
                     <br />
                    <button >Edit</button>
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) =>
(
    {
        employee:state.employeeReducer.employee
    }
)


export default connect(mapStateToProps,{editEmployee})(EmployeeEdit);