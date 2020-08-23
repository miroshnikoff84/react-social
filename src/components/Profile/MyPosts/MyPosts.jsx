import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postData = [
    {id: 1, message: 'Hi', likesCount: 12},
    {id: 2, message: '24 урок', likesCount: 11}
  ]

  return <div className={s.postsBlock}>
    My posts
      <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
    <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
    <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
        </div>
  </div>
}

export default MyPosts;