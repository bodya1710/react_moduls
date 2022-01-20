import React, { useState, useEffect } from 'react';
import {Outlet} from "react-router-dom";

import {userService} from '../../services/user.service';
import User from '../../components/User/User'
import css from './UserPage.module.css'

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, []);

    return (
        <div className={css.wrap_users_element}>
            <div className={css.wrap_users}>{users.map(user => <User key={user.id} user={user}/>)}</div>
            <div className={css.wrap_user_detail}><Outlet/></div>
        </div>
    );
};

export default UsersPage;