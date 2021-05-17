import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Setting from './components/Setting/Setting';
import Friends from './components/Friends/Friends';
import { Route } from "react-router-dom";



const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' 
          render={ () => <Dialogs store={props.store}/>} />
          <Route path='/profile' 
          render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}  />} />
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