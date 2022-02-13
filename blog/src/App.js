import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Create from "./Components/Create";
import Single from "./Components/single";
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.Location.pathname = "/login";
    })
  }

  return (
    <Router className="container">
      <nav className='navbar navbar-expand-lg navbar-light bg-light ms-auto'>
        <Link className="nav-link" to="/">Home</Link>
        {!isAuth ?
          <Link className="nav-link" to="/login">Login</Link>
          :(
            <>
            <Link className="nav-link" to="/create">Create Post</Link>
            <button className="btn btn-danger" onClick={signUserOut}>LogOut</button>
            </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth = {isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/create" element={<Create isAuth={isAuth} />} />
        <Route path="/single" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
