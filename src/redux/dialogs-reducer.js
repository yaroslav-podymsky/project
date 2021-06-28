const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Iliya' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Magomed' },
        { id: 4, name: 'Ramazan' },
        { id: 5, name: 'Valera' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Hi1!' },
        { id: 4, message: 'Hi2!' },
        { id: 5, message: 'Hi3!' }
    ]
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state. messages,{ id: 6, message: body } ]
            };
        default:
            return state;
    }
}


export const sendMessageCreator = (newMessageBody) =>({type: SEND_MESSAGE, newMessageBody})



export default dialogsReducer;