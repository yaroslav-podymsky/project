import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import { maxLenghtCreator, required } from '../../../redux/utils/validators/validators';
import { Textarea } from '../../common/preloader/FormsControls/FormsControls.js';

const maxLength10 = maxLenghtCreator(10);

let AddNewPostForm = (props) => {
  return (
     <form onSubmit={props.handleSubmit}>
    <div>
      <Field name="newPostText" component={Textarea} placeholder={"Post message"}
       validate={[required, maxLength10]}/>
      </div>
    <div><button>Add post</button></div>
  </form>
  )
  
}

const AddNewPostFormRedux = reduxForm ({form: "ProfileAddNewPostForm"}) (AddNewPostForm)



const MyPosts = (props) => {
let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);
let newPostElement = React.createRef();


let onAddPost = (values) => {
  props.addPost(values.newPostText);
};

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}> 
        {postsElement}
      </div>
    </div>
  )
}



export default MyPosts;