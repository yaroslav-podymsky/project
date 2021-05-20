import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/store';



const MyPosts = (props) => {
let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);
let newPostElement = React.createRef();


let onAddPost = () => {
  props.addPost();
}

let onPostChange =() => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text)
  // let action = updateNewPostTextActionCreator(text);
  // props.dispatch(action);

}

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
        <div><button onClick={onAddPost}>Add post</button></div>
      </div>
      <div className={s.posts}> 
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts;