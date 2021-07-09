import s from './ProfileInfo.module.css';
import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/preloader/FormsControls/FormsControls';
import style from '../../common/preloader/FormsControls/FormsControls.module.css';



const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return  <form onSubmit={handleSubmit}>
    <div><button>SAVE</button></div>
    {error && <div className={style.formSummaryError}>
{error}
    </div>
}
 <div>
   <b>Full Name</b>: {createField("Full name", "fullName", [], Input )}
 </div>
 <div>
   <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
 </div>

   <div>
     <b>My professional skills </b>: 
     {createField("My professional skills", "lookingForAJobDescription", [], Textarea )}
     
   </div>
 <div>
   <b>About Me</b>: 
   {createField("About me", "aboutMe", [], Textarea )}
 </div>
 <div>
   <b> Contacts</b>: {Object.keys(profile.contacts).map(key => {
     return <div key={key} className={s.contact}>
    <b>{key}: {createField(key, "contacts." + key, [], Input )} </b>
     </div>
   })}
 </div>
</form>
  }



const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'}) (ProfileDataForm)

  export default ProfileDataFormReduxForm;