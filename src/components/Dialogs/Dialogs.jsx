import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return  <div className={s.dialog + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink></div>
}

const Message = (props) =>{
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
           <DialogItem name="Iliya" id="1" />
           <DialogItem name="Alex" id="2" />
           <DialogItem name="Magomed" id="3" />
           <DialogItem name="Ramazan" id="4" />
           <DialogItem name="Valera" id="5" />
        </div>
        <div className={s.messages}>
            <Message message="Hi" />
            <Message message="How are you?" />
            <Message message="yo!" />
            <Message message="yo!" />
            <Message message="yo!" />    
        </div>
    </div>
)
}

export default Dialogs;