import React from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';




const ProfileInfo = (props) => {
if (!props.profile) {
  return <Preloader />
}

  return (
    <div>
      {/* <div>
        <img className={s.topImg} src='https://cebo-style.ru/upload/iblock/55e/55ec4e1e238b980de64647032aac60f6.jpg' />
      </div> */}
      <div className={s.descriptionBblock}>
        <img className={s.Avatar} src={props.profile.photos.large} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>  
    </div>
  )
}

export default ProfileInfo;