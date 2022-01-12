import React, {useState, useEffect} from "react";

import Post from "../Post/Post";
import '../style/style.css';
function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(item=>item.json())
            .then(item=>setPosts(item))
    },[])
    return (
        <div className={'wrap_posts'}>
            {posts.map(item=> <Post key={item.id} id={item.id} title={item.title} body={item.body}/>)}
        </div>
    );
}
export default Posts;