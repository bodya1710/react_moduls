import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/comments.slice";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const {comments} = useSelector(state => state['CommentsReducer']);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllComments())
    },[])
    return (
        <div>
            {comments.map(item=><Comment key={item.id} comment={item}/>)}
        </div>
    );
};

export {Comments};