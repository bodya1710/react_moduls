import React, {useEffect, useState} from 'react';

import {Episodes} from "../../components/Episodes/Episodes";
import css from "./EpisodesPage.module.css";

const EpisodesPage = () => {

    const [page, setPage] = useState(1)
    const [episod, setEpisod] = useState([]);

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
            .then(response => response.json())
            .then(value =>{
                console.log(value)
                setEpisod(value.results)})
    },[page])

    const next = (e) => {
        if (page === 3){  return e.disabled=true}
        setPage(page + 1)
    }
    const previous = (e) => {
        if (page === 1){  return e.disabled=true}
        setPage(page - 1)
    }
    return (
        <div className={css.wrap_element}>
            <div className={css.header_container_episodes}>
                <h2>Rick and Morty episodes!</h2>
            </div>
            <div className={css.wrap_item_episod}>{episod.map(item => <Episodes key={item.id} episodes={item}/>)}</div>
            <div className={css.wrap_btn}>
                <button onClick={(e)=>previous(e)}>Previous</button>
                <button onClick={(e)=>next(e)}>Next</button>
            </div>

        </div>
    );
};

export {EpisodesPage};