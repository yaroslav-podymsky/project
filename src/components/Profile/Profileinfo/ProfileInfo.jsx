import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://www.cliparthut.com/images/149/nklOX.png' />
      </div>
      <div className={s.descriptionBblock}>ava+description</div>
    </div>
  )
}

export default ProfileInfo;