import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Setting from './components/Setting/Setting';
import Friends from './components/Friends/Friends';
import { Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/Profileinfo/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {
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
  )
}

export default App;