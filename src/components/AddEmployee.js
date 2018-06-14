import React, { Component } from 'react';
import landing from './landing.css';



class AddEmployee extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
render() {
  console.log(this.props.employeeState);
    return (
    <div>
        <form className="coustomDiv" onSubmit={this.handleClick}>
            <input style={{marginLeft:"10px"}} type="text" placeholder="Employee Name" ref="inputEmployeeName"/>
            <input style={{marginLeft:"150px"}}type="text" placeholder="Employee Designation" ref="inputEmployeeDesignation"/>
            <input style={{marginLeft:"300px"}} type="text" placeholder="Employee Section" ref="inputEmployeeSection"/>
            <button style={{marginLeft:"30px"}}type="submit">Add Details</button>
       </form>
    </div>
    );
  }
  handleClick(event){
    event.preventDefault();
    console.log(this.refs.inputEmployeeName);

    const inputEmployeeName = this.refs.inputEmployeeName;
    const inputEmployeeDesignation = this.refs.inputEmployeeDesignation;
    const inputEmployeeSection = this.refs.inputEmployeeSection;
    console.log(inputEmployeeName);
    const name = inputEmployeeName.value;
    const designation = inputEmployeeDesignation.value;
    const section  = inputEmployeeSection.value;
  console.log(name);
  this.props.createNewEntry(name,designation,section);
  const name = '';
  const designation = '';
  const section  ='';


  }

}
export default AddEmployee;
