import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Episodes.module.css';

const Episodes = ({episodes}) => {
    const {name, episode, air_date} = episodes;

    return (
        <div className={css.container_item_episod}>
                <h2>{name}</h2>
                <p>Episode: {episode}</p>
                <p>Air date: {air_date}</p>
                <NavLink to={'details'} state={episodes}>Episode details</NavLink>
        </div>
    );
};

export {Episodes};