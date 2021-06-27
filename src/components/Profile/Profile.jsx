import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './Profileinfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
 
  return (
    <div> 
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />

21:00


      <MyPostsContainer/>
    </div>)
}

export default Profile;