import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import { auth, db } from '../firebase';

function Home(isAuth) {

  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
   const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   };

   getPosts();
  })

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }

  return (
    <div className='homePage'>
        {
          postList.map((post) => {
            return( 
            <div className='post' key={post.id}>
              <div className='postImage'>
                <img src={post.cover.url} alt=''/>
              </div>
              <div className='postHeader'>
                <h1>{post.title}</h1>
              </div>
              <div className='postBody'>
                <div className='info'>
                  <h3>{post.author.name}</h3> on 
                  <i>{Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(post.created_at)}</i>
                  {isAuth && post.author.id === auth.currentUser.uid &&
                    <button onClick={() => {deletePost(post.id)}}> {" "} &#128465;</button>
                  }
                </div>
                

                <div className='cont'>
                  {post.postContent}
                </div>
              </div>
            </div>
          )})
        }
    </div>
  );
}

export default Home;