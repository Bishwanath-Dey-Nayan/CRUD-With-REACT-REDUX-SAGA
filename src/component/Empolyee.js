import React from 'react';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';


class Employee extends React.Component{

   constructor(props)
   {
       super(props)
       this.state = {
           isSaveBtnClicked:false
       }
       this.onClick = this.onClick.bind(this);

       
    
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
        return(
            <div>
                <h1>Employee Info</h1>
                {!this.state.isSaveBtnClicked && <button onClick={this.onClick}>Add</button>}
                {this.state.isSaveBtnClicked && <EmployeeForm />}
                {!this.state.isSaveBtnClicked && <EmployeeList />}
            </div>
        );
    }
}



export default Employee;