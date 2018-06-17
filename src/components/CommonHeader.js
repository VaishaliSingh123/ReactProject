import React, { Component } from 'react';
import CernerPicture from './CernerPicture.png';
import commonHeader from './commonHeader.css';
import AddEmployee from './AddEmployee';
import Landing from './Landing';
import { Link, Route, Switch } from 'react-router-dom';



class CommonHeader extends React.Component {
render() {
  console.log(this.props.employeeState);
    return (
      <div>
      <ul className="componentHeader">
          <li className="componentHeaderList"><Link className="active" to="/Landing">Home</Link></li>
          <li className="componentHeaderList"><Link to="/AddEmployee">Add Employee</Link></li>
      </ul>
      </div>
    );
  }
}
export default CommonHeader;
