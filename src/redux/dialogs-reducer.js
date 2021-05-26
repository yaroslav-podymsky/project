const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
    ],
    newMessageBody: " "
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
          return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody:'',
                messages: [...state. messages,{ id: 6, message: body } ]
            };
        default:
            return state;
    }
}


export const sendMessageCreator = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
 ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;