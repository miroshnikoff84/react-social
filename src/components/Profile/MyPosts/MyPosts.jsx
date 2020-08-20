import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return <div>
    My posts
      <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
    <Post message='Hi, are you?' likesCount='10'/>
    <Post message="It's my first post" likesCount='24' />
        </div>
  </div>
}

export default MyPosts;