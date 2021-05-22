import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: '0' },
        { id: 2, message: 'Its my first post', likesCount: '12' },
        { id: 3, message: 'yo yo yo ', likesCount: '32' }
      ],
      newPostText: 'text'
    },
    dialogsPage: {
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
    },
    sidebar:{}
  },
  _callSubscriber() {
    console.log('State was changet');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarrPage, action);
    this._callSubscriber(this._state);
  }
}
export const addPostActionCreator = (type) => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
export const sendMessageCreator = (type) => ({ type: 'SEND_MESSAGE' });
export const updateNewMessageBodyCreator = (body) => ({ type: 'UPDATE_NEW_MESSAGE_BODY', body: body });
export default store;
window.store = store;