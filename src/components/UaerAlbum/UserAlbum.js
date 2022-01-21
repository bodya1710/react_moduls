import React from 'react';
import {Link, Outlet} from "react-router-dom";

import css from './UserAlbum.module.css';

const UserAlbum = ({album}) => {
    const {id, title} = album;
    return (
        <div>
            <div className={css.wrap_album}>
                <h2>{id}</h2>
                <p>{title}</p>
                <Link to={id+`/photos`} >Photos</Link>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default UserAlbum;