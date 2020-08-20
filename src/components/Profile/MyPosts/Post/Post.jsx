import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
        <img src='https://waffleon.b-cdn.net/img/p/435740/c0236d510003303c43309068ea3a504e1fc9d69a5a0ad5f88b2acdb6e056ec6d.jpg' alt='avatar'/>
        {props.message}
        <div>
<span>Like</span> {props.likesCount}
          </div>
        </div>
}

export default Post;