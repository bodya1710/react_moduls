import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import css from './DetailPostsPage.module.css'

const DetailPostsPage = () => {

    const {state} = useLocation();

    const {id} = useParams();

    const [post, setPost] = useState(null);


    useEffect(()=>{
        if (state){
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost(value));
    },[id])
    return (
        <>
            {post && (
                <div className={css.wrap_post}>
                    <h2>{post.id}</h2>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                    <div className={css.wrap_link}><Link to={'comments'}>Button</Link></div>
                </div>
            )}
            <div><Outlet/></div>
        </>
    );
};

export default DetailPostsPage;