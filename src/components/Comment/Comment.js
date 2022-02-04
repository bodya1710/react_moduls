import React from 'react';

import css from './Comment.module.css'

const Comment = ({comment:{id, name, body}}) => {
    return (
        <div className={css.wrap_comments}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{body}</div>
        </div>
    );
};

export {Comment};