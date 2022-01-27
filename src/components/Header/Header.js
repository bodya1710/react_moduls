import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
const Header = () => {
    return (
        <div className={css.wrap_header}>
            <NavLink to={''}>Rick and Morty!</NavLink>
        </div>
    );
};

export {Header};