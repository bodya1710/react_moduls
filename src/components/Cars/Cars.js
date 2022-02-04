import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllCars} from '../../store';
import {Car} from "../Car/Car";

const Cars = () => {
    const {cars, status,error} = useSelector(state => state['carReducer']);

   const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCars())
    },[])

    return (
        <div>
            {status === 'pending' && <h1>Loding</h1>}
            {error&&<h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};