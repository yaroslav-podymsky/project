import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink></div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>

            
            <div className={s.messages}>
                <Message message={messagesData[1].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
            </div>
        </div>
    )
}

let dialogsData = [
    { id: 1, name: 'Iliya' },
    { id: 2, name: 'Alex' },
    { id: 3, name: 'Magomed' },
    { id: 4, name: 'Ramazan' },
    { id: 5, name: 'Valera' }
]

let messagesData = [
    { id: 1, message: 'Hi'},
    { id: 2, message: 'How are you?'},
    { id: 3, message: 'yo!'},
    { id: 4, message: 'yo!'},
    { id: 5, message: 'yo!'}
]

export default Dialogs;