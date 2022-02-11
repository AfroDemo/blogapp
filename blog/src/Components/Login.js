import React from 'react';
import {auth, provider} from "../firebase";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login({setIsAuth}) {

    let navigate = useNavigate();

    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        })
    };

  return (
      <div className='card login'>
          <div className='card-header text-center'>
              <p>Sign In with Google to Continue</p>
          </div>
          
          <button 
            onClick={signInWithGoogle}
            className='btn btn-lg btn-google btn-block text-uppercase btn-outline'
            >
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" /> 
              Sign with Google
            </button>
      </div>
  );
}

export default Login;