import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Setting from './components/Setting/Setting';
import Friends from './components/Friends/Friends';
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/Profileinfo/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import {initializeApp} from './redux/App-reducer'
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';


class App extends Component  {
  componentDidMount() {
    this.props.initializeApp();
}

  render () {
    if(!this.props.initialized) {
    return <Preloader />
  }
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' 
          render={ () => <DialogsContainer />} />
          <Route path='/profile/:userId?' 
          render={ () => <ProfileContainer  />} />
          <Route path='/users' 
          render={ () => <UsersContainer />} />
          <Route path='/login' 
          render={ () => <LoginPage />} />
          <Route path='/news' 
          render={ () => <News />} />
          <Route path='/musik' 
          render={ () => <Musik />} />
          <Route path='/setting' 
          render={ () => <Setting />} />
          <Route path='/friends' 
          render={ () => <Friends />} />
        </div>
      </div>
  )}} 
  

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose (
  withRouter, 
  connect(mapStateToProps, {initializeApp})) (App);