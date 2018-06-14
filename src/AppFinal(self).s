import React, { Component } from 'react';
import Login from './components/Login';
import Header from './components/Header';


class App extends Component {
  constructor(props){
        super(props);
        this.state={
          currentLoginPage:'false'
        }
    }
  render(){
        return (
          <div >
            <Header />
            <Login />
          </div>
          );
  }
// displaylandingPage(loginRedirect){
//   if(loginRedirect == 'true')
//     {
//       console.log("displaylandingPage",loginRedirect);
//       this.setState({
//           currentLoginPage:'true'
//     })
//     }else{
//         console.log("displaylandingPage",loginRedirect)
//       this.setState({
//       currentLoginPage:'false'
//     })
//     }
// }
//         // render() {
//         //   return (
//         //     <Router>
//         //       <div >
//         //         <Header />
//         //         <Login />
//         //       <Switch>
//         //         <Route exact path='/' component={Login} />
//         //         <Route exact path='/Landing' component={Landing} />
//         //       </Switch>
//         //       </div>
//         //   </Router>
//         //   );
//         // }
}

export default App;
