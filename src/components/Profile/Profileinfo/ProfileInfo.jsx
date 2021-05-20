import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://drevgrad74.ru/wp-content/uploads/2020/10/kredit1.jpg' />
      </div>
      <div className={s.descriptionBblock}>ava+description</div>
    </div>
  )
}

export default ProfileInfo;