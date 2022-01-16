import React from 'react';

import './StyleUser.css'
const User = ({user,getUser}) => {
    const {id, name, username} = user;
    return (
        <div className={'wrap_user'}>
            <div>{id} {name} - {username}</div>
            {<button onClick={()=>getUser(user)}>Get Details</button>}
        </div>
    );
};

export default User;