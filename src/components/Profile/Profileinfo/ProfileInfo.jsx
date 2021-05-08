import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://www.publicdomainpictures.net/pictures/210000/velka/floral-pattern-background-681.jpg' />
      </div>
      <div className={s.descriptionBblock}>ava+description</div>
    </div>
  )
}

export default ProfileInfo;