import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPost} from "../../store/post.slice";
import {Post} from "../Post/Post";

const Posts = () => {
    const {posts} = useSelector(state => state['PostReducer'])

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllPost())
    },[])
    return (
        <div>
            {posts.map(item=><Post key={item.id} post={item}/>)}
        </div>
    );
};

export {Posts};