import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import PostComments from "../../components/PostComments/PostComments";

const AllCommentsPost = () => {

    const {id} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        postService.getByComments(id).then(value => setComments(value));
    },[])
    return (
        <div>
            {comments.map(item => <PostComments key={item.id} comments={item}/>)}
        </div>
    );
};

export default AllCommentsPost;