import React from 'react';
import {connect} from 'react-redux';
import {addEmployee} from '../action/employeeAction';
import 'bootstrap/dist/css/bootstrap.css';

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
        this.props.AddClicked();
        
    }



    render()
    {
        return(
            <div>
               <h3>Add Employee</h3>
                 <br />
                <div className='container'>
                <form onSubmit={this.onSubmit} className='form'>
                    <div className='form-group'>
                    <label for='FirstName'>First Name</label><br/>
                    <input required className='form-control-sm' id='FirstName' type="text" ref={(input) => this.getFirstName=input} />
                    </div>
                    <div className='form-group'>
                    <label>Last Name</label><br/>
                    <textarea className='form-control-sm' required ref={(input) => this.getLastName=input}/>
                    </div>
                    <div className='form-group'>
                    <label>Gender</label><br/>
                    <select className='from-control form-control-sm' ref={(input) => this.getGender=input} required>
                    <option value="" disabled selected>Choose a salutation ...</option>
                    <option value = "Male">Male</option>
                    <option value = "Female">Female</option>
                    </select>
                    </div>
                    <div className='form-group'>
                    <label>Salary</label><br/>
                    <input className='form-control-md' required type="number" ref={(input) => this.getSalary=input} />
                    </div>
                    <button className='btn btn-primary'>Add</button>
                </form>
            </div>
            </div>
        );
    }
}




export default connect(null,{addEmployee})(EmployeeForm)