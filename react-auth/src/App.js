
import './App.css';
import { LoginForm } from './components/pages/login';
import { BrowserRouter as Router,Redirect,Route, Switch,Link} from "react-router-dom";
import { SignUp } from './components/pages/signup';

function App() {
  return (
  <Router >
      <div className="App">
        <a href="/" className='logo'>LOGO</a>
        <Switch>
          <Route path ="/" exact render ={() =>{
            return(<Redirect to="/login"/>)
          }} />
          <Route path ="/login" exact component = {LoginForm} />
          <Route path = "/signup" exact component={SignUp} />
        </Switch>
      </div>
  </Router>
  );
}

export default App;
