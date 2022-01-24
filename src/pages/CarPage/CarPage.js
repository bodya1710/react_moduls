import React, {useEffect, useState} from 'react';

import css from '../style/PageStyle.module.css'
const CarPage = () => {

    const [car, setCar] = useState('');
    let [count, setCount] = useState(0)

    useEffect(() => {
        (fetch("https://loremflickr.com/320/240/car").then(res => {
            setCar(res.url);
        }))

    }, [count]);
    const update = () => {
        count++
        setCount(count)
    }

    return (
        <div className={css.wrap_item}>
            <img src={`${car}`}  alt=""/>
            <button onClick={()=>update()}>Update</button>
        </div>

    );
};

export  {CarPage};