import React from 'react';
import css from './User.module.css'

const User = ({user:{id, name, username}}) => {

    return(
        <div className={css.wrap_user}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
        </div>
    )
};

export {User};