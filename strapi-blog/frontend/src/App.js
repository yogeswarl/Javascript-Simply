import './App.css';
import Header from './components/Header';
import MainBlogList from './components/blog/MainBlogList';
import "./sass/main.scss";
function App() {
  return (
    <div >
      <Header />        
      <MainBlogList />
    </div>
  );
}

export default App;
