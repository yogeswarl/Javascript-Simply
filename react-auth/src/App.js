
import './App.css';
import { LoginForm } from './components/pages/login';
import { BrowserRouter as Router,Redirect,Route, Switch,Link} from "react-router-dom";
import { SignUp } from './components/pages/signup';
import { useState } from 'react';
import {Modal} from './components/utilities/Modal'
function App() {
  const [checkSignUp,setcheckSignUp] = useState("");
  return (
  <Router >
      <div className="App">
        <header className="header width-100 fx justify-space-between align-center">
          <Link to="/" className="logo"> LOGO</Link> 
          <div>
            <Link to="/" className="mh-2" onClick={(e) => {e.preventDefault();setcheckSignUp("login")}}>Login</Link> 
            <Link to="/" className="mh-2" onClick={(e) => {e.preventDefault();setcheckSignUp("signup")}}>signup</Link> 
          </div>
        </header>
        {checkSignUp ==="login" && <Modal setmodalVisibility={setcheckSignUp}  children ={<LoginForm setmodalVisibility={setcheckSignUp} />}></Modal>}
        {checkSignUp ==="signup" && <Modal setmodalVisibility={setcheckSignUp} children ={<SignUp setmodalVisibility={setcheckSignUp}/>}></Modal>}
      </div>
  </Router>
  );
}

export default App;
