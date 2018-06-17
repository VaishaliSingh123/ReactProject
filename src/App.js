import React, { Component } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Landing from './components/Landing';
import AddEmployee from './components/AddEmployee';
import CommonHeader from './components/CommonHeader';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
        super(props);
        this.state={
          currentLoginPage:'false',
          employeeState :[
             {
                 name: 'Vaishali',
                 designation:'Software Engineer',
                 section:'H2 Building',
                 isPresent: true,
                 isCompleted: false
             },
             {
                 name: 'Samriddhi',
                 designation:'Software Engineer',
                 section:'c2 Building',
                 isPresent: true,
                 isCompleted: true
             },
      ]

        }
        this.displaylandingPage=this.displaylandingPage.bind(this);
        this.createNewEntry=this.createNewEntry.bind(this);
    }
  render(){
    let page = false;
    let header = false;
    let creatingData = false;
    if(this.state.currentLoginPage == 'false'){
    console.log("page  ",page);
    page = <Login
    displaylandingPage={this.displaylandingPage}
    />
    }
    if(this.state.currentLoginPage == 'true'){
    page = <Landing
            employeeState={this.state.employeeState}
            />
    creatingData = <AddEmployee createNewEntry={this.createNewEntry} />
    header = <CommonHeader />
    }
  return (
    <div >
      <Header />
      {/* {header}
      {page}
      {creatingData} */}
      <Route path="/Login" exact={true} component={Login}/>
      <Route path="/Landing" exact={true} component={Landing}/>
      <Route path="/AddEmployee"  exact={true} component={AddEmployee}/>
  </div>
);
}
displaylandingPage(loginRedirect){
  if(loginRedirect === 'true')
    {
      console.log("displaylandingPage",loginRedirect);
      this.setState({
          currentLoginPage:'true'
    })
    }
}
createNewEntry(name,designation,section){
  this.state.employeeState.push({
    name,
    designation,
    section,
    isCompleted:false
  })
  this.setState({employeeState: this.state.employeeState})

}

}

export default App;
