import React, {useState, useEffect} from "react";

import Comment from "../Comment/Comment";
function Comments() {
    let [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(item=>item.json())
            .then(item=>setComments(item))
    },[]);

    return(
        <div className={'wrap_comments'}>
            {comments.map(item => <Comment key={item.id} id={item.id} name={item.name} email={item.email} body={item.body}/>)}
        </div>

    )
}
export default Comments