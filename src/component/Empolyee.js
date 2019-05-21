import React from 'react';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';
import EmployeeEdit from './EmployeeEdit';
import {connect} from 'react-redux';



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
       
    }

    render()
    {
    
        return(
            <div>
                <h1>Employee Info</h1>
                
                {(!this.state.isSaveBtnClicked && !this.props.isEditBtnClicked) && <button onClick={this.onClick}>Save</button>}
                {(this.state.isSaveBtnClicked || this.props.isEditBtnClicked) && <EmployeeForm  AddClicked={this.Add}/>}
                {!this.state.isSaveBtnClicked && <EmployeeList EditClicked={this.editBtn}/>}
                { this.props.isEditBtnClicked && <EmployeeEdit />}
                
            </div>
        );
    }
}

const mapStateToProps = (state) =>
(
{
    isEditBtnClicked:state.employeeReducer.isEditBtnClicked
}
)

export default connect(mapStateToProps)(Employee);