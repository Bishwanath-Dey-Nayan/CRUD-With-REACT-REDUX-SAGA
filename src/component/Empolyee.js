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
           isEditBtnClicked:false,
       }
       this.onClick = this.onClick.bind(this);
       this.Add = this.Add.bind(this);
       this.editBtn = this.editBtn(this);

    }

    Add()
    {
        this.setState({isSaveBtnClicked:false});
    }

    editBtn()
    {
        this.setState({isEditBtnClicked:true});
    }


    onClick(e) 
    {
        console.log("inside on click");
        const isSaveBtnClicked = !this.state.isSaveBtnClicked;
        this.setState({isSaveBtnClicked});
        console.log(this.state.isSaveBtnClicked);

    }

    render()
    {
        let btnName = '';
        if(this.state.isSaveBtnClicked)
        {
            btnName = 'Go To List';
        }
        else{
            btnName = "Add";
        }
        return(
            <div>
                <h1>Employee Info</h1>
                
                {(!this.state.isSaveBtnClicked && !this.props.isEditBtnClicked) && <button onClick={this.onClick}>{btnName}</button>}
                {(this.state.isSaveBtnClicked && this.props.isEditBtnClicked) && <EmployeeForm  AddClicked={this.Add}/>}
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