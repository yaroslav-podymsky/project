import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
    <div>
      my posts
      <div>
        <textarea></textarea>
      <button>Add post</button>
      </div>
      <div className={s.posts}>
      <Post message='Hi, how are you?' likesCount='0' />
      <Post message='Its my first post' likesCount='23' />
      <Post />
      </div>
      </div>
      );
}

export default MyPosts;