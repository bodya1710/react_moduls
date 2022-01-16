import React, {useState, useEffect} from 'react';

import User from "../User/User"
import {UserServices} from '../../services/users.services'

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserServices.getAll()
            .then(value => setUsers(value))
    },[])

    return (
            <div>
                <div>{users.map(item => <User key={item.id} user={item} getUser={getUser}/>)}</div>
            </div>

    );
};

export default Users;