import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div>
    <div>
    <img src='https://www.publicdomainpictures.net/pictures/210000/velka/floral-pattern-background-681.jpg' />
  </div>
  <div>ava+description</div>
  <MyPosts />
  </div>
}

export default Profile;