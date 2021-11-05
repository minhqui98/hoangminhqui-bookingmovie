
import './App.css';
import Home from './Pages/Home/Home';
import Detail from '../src/Pages/Detail/Detail';
import SignUp from './Pages/SignUp/SignUp';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SignIn from './Pages/SignIn/SignIn';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { courseAction } from './Redux/Actions';
import BookTicket from './Pages/BookTicket/BookTicket';
import admin from './Pages/Admin/admin';
import TabSignInUp from './Components/Tab';
import 'antd/dist/antd.css';


// import SignInAdmin from './Pages/SignInAdmin/SignInAdmin';

class App extends Component {
  render(){
    return (
      // <StyledEngineProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/detail/:id" component={Detail}/>
            <Route path="/admin" component={admin}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={TabSignInUp}/>
            <Route path="/bookticket/:id" component={BookTicket}/>
            <Route path="/" exact component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
      // </StyledEngineProvider>
    );
  }
  getCredentialLocal=()=>{
    const credenidalStore=localStorage.getItem("cxvnbxcmn");
    
    if(credenidalStore)
    {
      this.props.dispatch(courseAction("GET_CREDENTIAL",JSON.parse(credenidalStore)))
    }
  }
  getToken=()=>{
    const token=localStorage.getItem("token");

    if(token)
    {
      this.props.dispatch(courseAction("GET_TOKEN",token))
    }
  }
  componentDidMount(){
    this.getCredentialLocal();
    this.getToken();
  }
}

export default connect() (App);
