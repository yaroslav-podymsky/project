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
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' 
          render={ () => <DialogsContainer store={props.store}/>} />
          <Route path='/profile' 
          render={ () => <Profile store={props.store}  />} />
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