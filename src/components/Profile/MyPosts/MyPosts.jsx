import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {

  let postData = [
    { id: 1, message: 'Hi, how are you?', likesCount:'0'},
    { id: 2, message: 'Its my first post', likesCount:'12'}
]

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;