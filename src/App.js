import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://w7.pngwing.com/pngs/210/622/png-transparent-indonesian-ministry-of-labour-government-ministries-of-indonesia-workforce-logo-indonesia-miscellaneous-hand-logo.png' />
      </header>
      <nav className='nav'>
        <div> <a>Profile</a></div>
        <div> <a>Messages</a></div>
        <div> <a>News</a></div>
        <div> <a>Music</a></div>
        <div> <a>Settings</a></div>
      </nav>
      <div className='content'>Main content</div>
    </div>);
}




export default App;