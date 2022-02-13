import React, { useState} from 'react';
import {addDoc, collection} from "firebase/firestore";
import {db, auth} from "../firebase";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function Create({isAuth}) {
  const addOn = uuid().slice(0,8);

  let navigate = useNavigate();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const postsCollectionRef = collection(db, "posts");
  const created_at = Date.now();

  const createPost = async () => {
    if(image == null){
      const cover = "default";
      await addDoc(postsCollectionRef, {
        title, 
        postContent, 
        created_at,
        cover,
        author: {name: auth.currentUser.displayName, id: auth.currentUser.uid} 
      });
    }else{
      const cover = addOn+image.name;
      const storage = getStorage();
      var storageRef = await ref(storage, `images/${cover}`);
      uploadBytesResumable(storageRef,image,image).then(
        () =>{
          getDownloadURL(storageRef).then(function(url){
            console.log(url);
            
          
          addDoc(postsCollectionRef, {
            title, 
            postContent, 
            created_at,
            cover: {cover, url},
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid} 
          });
        }
      );
      });
    }
    navigate("/");
  };

  
  const check = () => {

    if(!isAuth){
      navigate("/login");
    }
  }
  check();
 
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
          <div className='mb-3'>
            <input className='form-control' type='file' onChange={(e)=>{setImage(e.target.files[0])}} />
          </div>
          <button onClick={createPost} className='btn btn-success'>Submit</button>
        </div>
      </div>

    </div>
  );
}

export default Create;
