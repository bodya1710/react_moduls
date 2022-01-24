import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

import css from './Layout.module.css'
const Layout = () => {
    return (
        <div className={css.wraper}>
            <div className={css.wrap_btn}>
                <NavLink to={'/cat'}>CAT</NavLink>
                <NavLink to={'/car'}>CAR</NavLink>
                <NavLink to={'/dog'}>DOG</NavLink>
                <NavLink to={'/girls'}>GIRLS</NavLink>
                <NavLink to={'/notebook'}>NOTEBOOK</NavLink>
            </div>
            <div><Outlet/></div>

        </div>
    );
};

export  {Layout};