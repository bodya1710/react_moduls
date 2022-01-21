import React from 'react';

const PostComments = ({comments:{id,name, email, body}}) => {
    return (
        <div>
            <h2>{id}</h2>
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostComments;