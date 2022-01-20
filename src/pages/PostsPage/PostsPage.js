import React, {useEffect, useState} from 'react';

import {postService} from "../../services/post.service";
import Posts from "../../components/Posts/Posts";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getAll().then(value => setPosts(value))
    },[]);

    return (
        <div>

            {posts.map(post => <Posts key={post.id} posts={post}/>)}
        </div>
    );
};

export default PostsPage;