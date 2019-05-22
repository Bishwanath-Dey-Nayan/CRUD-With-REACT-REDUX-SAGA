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
            <div className='container'>
                <h3>Edit</h3>
                
                <form onSubmit={this.onSubmit} className='form'>
                    <div className='form-group'>
                    <label>First Name</label>
                    <input required type="text"
                    className='form-control' 
                    value={this.state.FirstName}
                     onChange={(e)=>{this.setState({FirstName:e.target.value})}} />
                     </div>
                     <div className='form-group'>
                    <label>Last Name</label><br />
                    <textarea required
                    className='form-control'
                     value={this.state.LastName}
                     onChange={(e)=>{this.setState({LastName:e.target.value})}}
                     />
                    </div>
                    <div className='form-group'>
                    <select ref={(input) => this.getGender=input}
                    className='form-control form-control-lg'
                    onChange={(e)=>{this.setState({Gender:e.target.value})}} 
                    value={this.state.Gender} 
                    required>
                    <option value="" disabled selected>Choose a salutation ...</option>
                    <option value = "Male">Male</option>
                    <option value = "Female">Female</option>
                    </select>
                    </div>
                    <div className='form-group'>
                    <label>Salary</label><br />
                    <input required type="number"
                     className='form-control'
                     value={this.state.Salary}
                     onChange={(e)=>{this.setState({Salary:e.target.value})}}
                     />
                     </div>
                    <button className='btn btn-primary' >Edit</button>
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) =>
(
    {
        employee:state.employeeReducer.employee,
        
    }
)


export default connect(mapStateToProps,{editEmployee})(EmployeeEdit);