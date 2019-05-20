import React from 'react';
import {connect} from 'react-redux';
import {addEmployee} from '../action/employeeAction';

class EmployeeForm extends React.Component
{
    

     onSubmit = (e) =>
    {
        e.preventDefault();
        const FirstName = this.getFirstName.value;
        const LastName = this.getLastName.value;
        const Gender = this.getGender.value;
        const Salary = this.getSalary.value;

        const employee = {
            FirstName,
            LastName,
            Gender,
            Salary
        }

        this.props.addEmployee(employee);
    }




    render()
    {
        return(
            <div>
               
                 <br />
                <form onSubmit={this.onSubmit}>
                    <label>First Name</label> <br />
                    <input required type="text" ref={(input) => this.getFirstName=input} /><br />
                    <label>Last Name</label><br />
                    <textarea required ref={(input) => this.getLastName=input}/><br />
                    <select ref={(input) => this.getGender=input} required>
                    <option value="" disabled selected>Choose a salutation ...</option>
                    <option value = "Male">Male</option>
                    <option value = "Female">Female</option>
                    </select><br />
                    <label>Salary</label><br />
                    <input required type="number" ref={(input) => this.getSalary=input} /><br />
                    <button >Add</button>
                </form>
            </div>
        );
    }
}




export default connect(null,{addEmployee})(EmployeeForm)