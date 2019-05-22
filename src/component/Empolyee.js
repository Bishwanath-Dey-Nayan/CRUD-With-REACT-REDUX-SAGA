import React from 'react';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';
import EmployeeEdit from './EmployeeEdit';
import {connect} from 'react-redux';
import {addEmployeeBtnClicked} from '../action/employeeAction';



class Employee extends React.Component{

   constructor(props)
   {
       super(props)
       this.state = {
           isSaveBtnClicked:false,
           
       }
       this.onClick = this.onClick.bind(this);
       this.Add = this.Add.bind(this);
      

    }

    Add()
    {
        this.setState({isSaveBtnClicked:false});
    }



    onClick(e) 
    {
       
        const isSaveBtnClicked = true;
        this.setState({isSaveBtnClicked});
        this.props.addEmployeeBtnClicked();
       
    }


    render()
    {
 
        return(
            <div>
                <h1>Employee Info</h1>
                {this.props.edit === true &&<h3 className='alert alert-success'>Data Edited Successfully</h3>}
                
                {(this.state.isSaveBtnClicked===false && this.props.isEditBtnClicked===false) && <button className='btn btn-primary' onClick={this.onClick}>Add Employee</button>}
                <br /><br/>
                {(this.state.isSaveBtnClicked===true) && <EmployeeForm  AddClicked={this.Add}/>}
                {(this.state.isSaveBtnClicked===false && this.props.isEditBtnClicked===false) && <EmployeeList EditClicked={this.editBtn}/>}
                { this.props.isEditBtnClicked && <EmployeeEdit />}
                
            </div>
        );
    }
}

const mapStateToProps = (state) =>
(
{
    isEditBtnClicked:state.employeeReducer.isEditBtnClicked,
    edit:state.employeeReducer.edit

}
)

export default connect(mapStateToProps,{addEmployeeBtnClicked})(Employee);