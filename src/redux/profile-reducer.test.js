import profileReducer, { addPostActionCreator } from "./profile-reducer";
import React from "react";


it('new post should be added', () => {
    let action = addPostActionCreator("kalabala")
    let state = {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: '0' },
            { id: 2, message: 'Its my first post', likesCount: '12' },
            { id: 3, message: 'yo yo yo ', likesCount: '32' }
        ]
    };

    let newState = profileReducer(state,action )
   


    expect (newState.posts.length) .tobe(5); 
});

