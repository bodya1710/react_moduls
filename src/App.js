import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import './components/style/style.css';
function App() {
  return (
      <div className={'container'}>
        <div className={'block_users_posts'}>
          <Users/>
          <Posts/>
        </div>
        <div className={'block_coments'}><Comments/></div>
      </div>
  );
}

export default App;