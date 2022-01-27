import React, {useEffect, useState} from 'react';

import css from './EpisodesDetails.module.css'

const EpisodesDetails = ({episods}) => {
    const [episod,setEpisod] = useState(null)
    useEffect(()=>{
        fetch(`${episods}`)
            .then(response => response.json())
            .then(value =>{
                setEpisod({...value})}
               )
    },[])

    return (
        episod && (
            <div className={css.container_episode_detail}>
                <img src={`${episod.image}`} alt=""/>
                <h3>{episod.name}</h3>
                <p><span>Status:</span> {episod.status}</p>
                <p><span>Species:</span> {episod.species}</p>
                <p><span>Gender:</span> {episod.gender}</p>
                <p><span>Origin:</span> {episod.origin.name}</p>
                <p><span>Location:</span> {episod.location.name}</p>
        </div>
        )
    );
};

export {EpisodesDetails};