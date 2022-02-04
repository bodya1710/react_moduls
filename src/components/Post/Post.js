import React from 'react';

import css from './Post.module.css'

const Post = ({post:{id, title}}) => {
    return (
        <div className={css.wrap_post}>
            <div>{id}</div>
            <div>{title}</div>
        </div>
    );
};

export {Post};