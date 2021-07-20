import React, { useState } from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from './ProfileDataForm';





const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    )
      
    
  }

  return (
    <div>
      <div className={s.descriptionBblock}>
        <img className={s.Avatar} src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>EDIT</button></div>}
    <div>
      <b>Full Name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My professional skills </b>: {profile.lookingForAJobDescription}
      </div>}
    <div>
      <b>About Me</b>: {profile.aboutMe}
    </div>
    <div>
      <b> Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact className={s.contact}   key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}




const Contact = ({ contactTitle, contactValue }) => {
  return <div className={s.contact}><b>{contactTitle}</b> : {contactValue} </div>
}


export default ProfileInfo;














{/* <div>
        <img className={s.topImg} src='https://cebo-style.ru/upload/iblock/55e/55ec4e1e238b980de64647032aac60f6.jpg' />
      </div> */}