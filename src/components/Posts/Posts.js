import React from 'react';
import {Link} from "react-router-dom";

import css from "./Posts.module.css";
const Posts = ({posts}) => {

    const {id, title} = posts;

    return (
        <div className={css.wrap_posts}>
            <Link to={id.toString()} state={posts}>{id}) {title} </Link>
        </div>
    );
};

export default Posts;