import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Create from "./Components/Create";
import Single from "./Components/single";
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).thhen(() => {
      localStorage.clear()
      setIsAuth(false)
      window.Location.pathname = "/login";
    })
  }

  return (
    <Router className="container">
      <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/create">Create Post</Link>
        {!isAuth ?
          <Link to="/login">Login</Link>
          :
          <button variant="success" onClick={signUserOut}>LogOut</button>
        }
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/create" element={<Create />} />
        <Route path="/single" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
