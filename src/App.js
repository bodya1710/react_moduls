import React, {useState, useEffect} from 'react';

import Users from "./components/Users/Users";
import UserDetails from "./components/User_Details/User_Details";
import Posts from "./components/Posts/Posts";
import {PostsServices} from './services/posts.services'
import './AppStyle.css'

function App() {
    const [user, SetUser] = useState(null);
    const [posts, SetPosts] = useState([]);

    const getUser = (user) => {
        SetUser(user)
        SetPosts([])
    }
    const getUserId = (id) => {
        PostsServices.getById(id).then(value => SetPosts(value))
    }

  return (
     <div>
         <div className={'wrap'}>
             <Users getUser={getUser}/>
             {user && <UserDetails user={user} getUserId={getUserId}/>}
         </div>
         {!!posts.length && <Posts posts={posts}/>}
    </div>
  );
}

export default App;
