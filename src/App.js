import React, { Component } from "react"
import Login from "./components/Login"
import Header from "./components/Header"
import Landing from "./components/Landing"
import AddEmployee from "./components/AddEmployee"
import CommonHeader from "./components/CommonHeader"
import { Link, Route, Switch } from "react-router-dom"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: false,
			employeeState: [
				{
					name: "Vaishali",
					designation: "Software Engineer",
					section: "H2 Building",
					isPresent: true,
					isCompleted: false,
				},
				{
					name: "Samriddhi",
					designation: "Software Engineer",
					section: "c2 Building",
					isPresent: true,
					isCompleted: true,
				},
			],
		}
		this.handleLoginPage = this.handleLoginPage.bind(this)
		this.createNewEntry = this.createNewEntry.bind(this)
	}
	render() {
		return (
			<div>
				<Header />
				{this.state.isLoggedIn === true ? <CommonHeader /> : null}
				<Route
					path="/"
					exact={true}
					render={props => (
						<Login
							{...props}
							handleLoginPage={this.handleLoginPage}
							isLoggedIn={this.state.isLoggedIn}
						/>
					)}
				/>
				<Route
					path="/Landing"
					exact={true}
					render={props => (
						<Landing
							{...props}
							employeeState={this.state.employeeState}
							isLoggedIn={this.state.isLoggedIn}
						/>
					)}
				/>
				<Route
					path="/AddEmployee"
					exact={true}
					component={props => (
						<AddEmployee
							{...props}
							createNewEntry={this.createNewEntry}
							isLoggedIn={this.state.isLoggedIn}
						/>
					)}
				/>
			</div>
		)
	}
	handleLoginPage(loginParameter) {
		this.setState({
			isLoggedIn: loginParameter,
		})
	}
	createNewEntry(name, designation, section) {
		this.state.employeeState.push({
			name,
			designation,
			section,
			isCompleted: false,
		})
		this.setState({ employeeState: this.state.employeeState })
	}
}

export default App
