import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getMovies} from "../../store/movies.slice";


const MoviesList = () => {

   const {movies} = useSelector(state => state['moviesReducer']);

    const dispatch  = useDispatch();

    useEffect(()=>{
        dispatch(getMovies())
    },[])

    console.log(movies)

    return (
        <div>

        </div>
    );
};

export {MoviesList};