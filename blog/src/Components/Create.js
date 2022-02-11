import React, { useState } from 'react';
import {addDoc, collection} from "firebase/firestore";
import {db, auth} from "../firebase";
import { useNavigate } from 'react-router-dom';

function Create() {

  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const postsCollectionRef = collection(db, "posts");
  const created_at = Date.now();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title, 
      postContent, 
      created_at,
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid} 
    });
    navigate("/");
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='title'>Create New Post</h1>
          <div className='mb-3'>
            <label className='form-label'>Title:</label>
            <input 
            className='form-control' 
            placeholder='Title...'
            onChange={(event) => {
              setTitle(event.target.value);
            }} 
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Post:</label>
            <textarea 
            className='form-control' 
            placeholder='Post...'
            onChange={(event) => {
              setPostContent(event.target.value);
            }} 
            />
          </div>
          <button onClick={createPost} className='btn btn-success'>Submit</button>
        </div>
      </div>

    </div>
  );
}

export default Create;
