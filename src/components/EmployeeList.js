import React, { Component } from "react"

class EmployeeList extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.designation}</td>
				<td>{this.props.section}</td>
			</tr>
		)
	}
}
export default EmployeeList
