import './App.css';
import Header from './components/Header';
import "./sass/main.scss";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import blogList from './components/blog/MainBlogList';
import SingleBlog from './components/blog/SingleBlog';
function App() {
  return (
    <Router>
      <div >
        <Header />
        <Switch>
          <Route exact path= "/" component= {blogList} />
          <Route exact path= '/single/:postid' render = {props => (
            <SingleBlog {...props}/>
          )} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
