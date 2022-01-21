import React from 'react';
import {Link} from "react-router-dom";

import css from './User.module.css';
const User = ({user}) => {

    const {id, name, username} = user;

    return (
        <div className={css.wrap_users}>
            <Link to={id.toString()} state={user}>{id}) {name} -- {username}</Link>
            <div className={css.wrap_album}><Link to={id +`/albums`}>Albums</Link></div>
        </div>
    );
};

export default User;