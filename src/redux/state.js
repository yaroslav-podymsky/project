

let state = {
      profilePage: {
        posts:[
            { id: 1, message: 'Hi, how are you?', likesCount:'0'},
            { id: 2, message: 'Its my first post', likesCount:'12'},
            { id: 3, message: 'yo yo yo ', likesCount:'32'}
          ]
      },
      dialogsPage: {
        dialogs:[
            { id: 1, name: 'Iliya' },
            { id: 2, name: 'Alex' },
            { id: 3, name: 'Magomed' },
            { id: 4, name: 'Ramazan' },
            { id: 5, name: 'Valera' }
          ],
        messages:[
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Hi1!' },
            { id: 4, message: 'Hi2!' },
            { id: 5, message: 'Hi3!' }
          ]
        },
  }
export let addPost = (postMessage) => {
  let newPost = {
    id:5,
    message: postMessage,
    likesCount:0
  };
  state.profilePage.posts.push(newPost);
}
  export default state;