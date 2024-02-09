import React from "react";
import useAuth from '../hooks/useAuth';
import { jwtDecode } from 'jwt-decode';

function Header() {
  const { auth } = useAuth();
  let user = {};
  if(auth?.accessToken){
    user = jwtDecode(auth.accessToken);
    //console.log("RequireAuth",user);
  }

  function getButtons(){
    if(!user){ 
      return <div>
        <a className="btn btn-primary login-button" href="/login">Sign In</a>
        <a className="btn btn-secondary reg-button" href="/register">Sign Up</a>
        </div>;
        
    } else {
      return <div>
        <a className="btn btn-primary login-button" href="/admin">Admin</a>
        <a className="btn btn-secondary reg-button" href="/logout">Logout</a>
        </div>;  

    }
  }


  return (  
    <div>
        <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="/">Lateral Thinking AI</a>
                {getButtons()}
            </div>
        </nav>
    </div>
  );
}

export default Header;