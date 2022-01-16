import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <ul>
                <li>Post Id: {post.id}</li>
                <li>Post Title: {post.title}</li>
                <li>Post Body: {post.body}</li>
            </ul>
        </div>
    );
};

export default Post;