import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';



// const Message = (props) => {
//     return <div className={s.dialog}>{props.message}</div>
// }

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Iliya' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Magomed' },
        { id: 4, name: 'Ramazan' },
        { id: 5, name: 'Valera' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'yo!' },
        { id: 4, message: 'yo!' },
        { id: 5, message: 'yo!' }
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;