import React, { Component } from 'react';
import CernerPicture from './CernerPicture.png';
import commonHeader from './commonHeader.css';
import { Link } from 'react-router';
import AddEmployee from './AddEmployee';


class CommonHeader extends React.Component {
render() {
  console.log(this.props.employeeState);
    return (
      <div>
      <ul className="componentHeader">
          <li className="componentHeaderList"><a className="active" href="#home">Home</a></li>
          <li className="componentHeaderList"><a href="#AddEmployee">Add Employee</a></li>
      </ul>
      </div>
    );
  }
}
export default CommonHeader;
