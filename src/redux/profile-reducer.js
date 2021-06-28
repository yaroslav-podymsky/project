import { profileAPI, usersAPI } from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: '0' },
        { id: 2, message: 'Its my first post', likesCount: '12' },
        { id: 3, message: 'yo yo yo ', likesCount: '32' }
    ],
    profile: null,
    status:  ""
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts,newPost ],
                newPostText: ''
            };
        }
       
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }   
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const getUserProfile = (userId) => (dispatch) => {
usersAPI.getProfile(userId).then(responce => {dispatch(setUserProfile(responce.data));});
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(responce => {dispatch(setStatus(responce.data));});
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(responce => {
            if (responce.data.resultCode === 0 ) {
        dispatch(setStatus(status));}});
}





export default profileReducer;