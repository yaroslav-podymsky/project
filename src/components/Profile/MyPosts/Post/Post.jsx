import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return <div className={s.item}>
    <img src='https://yt3.ggpht.com/ytc/AAUvwngHu_wNL5pp3RX4nZc4km2JouXiw4NxBbSvtNCg=s900-c-k-c0x00ffffff-no-rj' />{props.message}
    <div>
    <span>like</span> {props.likesCount}
    </div>
  </div>
}

export default Post;