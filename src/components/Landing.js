import React, { Component } from 'react';
import landing from './landing.css';
import AddEmployee from './AddEmployee';
import EmployeeList from './EmployeeList';
import _ from 'lodash';


class Landing extends Component {
  renderEmploye(){
    const props = _.omit(this.props,'employeeState');
    return _.map(this.props.employeeState, (employee, index) => <EmployeeList key={index} {...employee} {...props}/>);
  }
render() {
  console.log(this.props.employeeState);
    return (
      <div className="coustomDiv">
        <table className="w3-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>designation</th>
              <th>section</th>
            </tr>
            </thead>
          <tbody>
          {this.renderEmploye()}
          </tbody>
        </table>

     </div>
    );
  }


}
export default Landing;
