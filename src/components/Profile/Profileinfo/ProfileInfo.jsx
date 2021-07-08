import React from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';





const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
if (!profile) {
  return <Preloader />
}
const onMainPhotoSelected = (e) => {
if (e.target.files.length) {
  savePhoto(e.target.files[0]);
}
}
  return ( 
    <div>
      {/* <div>
        <img className={s.topImg} src='https://cebo-style.ru/upload/iblock/55e/55ec4e1e238b980de64647032aac60f6.jpg' />
      </div> */}
      <div className={s.descriptionBblock}>
        <img className={s.Avatar} src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>  
    </div>
  )
}

export default ProfileInfo;