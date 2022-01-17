import React from 'react';

import './UsersStyle.css'
import User from '../User/User'
const Users = ({users}) => {
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;