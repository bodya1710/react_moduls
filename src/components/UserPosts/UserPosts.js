import React from 'react';

const UserPosts = ({posts}) => {

    return (
        <div>
            <div>{posts.id}</div>
            <div>{posts.title}</div>
            <div>{posts.body}</div>
        </div>
    );
};

export default UserPosts;