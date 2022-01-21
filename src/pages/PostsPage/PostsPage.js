import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import Posts from "../../components/Posts/Posts";
import css from './PostsPage.module.css';


const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getAll().then(value => setPosts(value))
    },[]);

    return (
        <div className={css.wrap_posts_element}>
            <div className={css.wrap_post}>{posts.map(post => <Posts key={post.id} posts={post}/>)}</div>
            <div className={css.wrap_post_detail}><Outlet/></div>
        </div>
    );
};

export default PostsPage;