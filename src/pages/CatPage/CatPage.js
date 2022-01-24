import React, {useEffect, useState} from 'react';

import css from "../style/PageStyle.module.css";

const CatPage = () => {

    const [cat, setCat] = useState('');
    let [count, setCount] = useState(0)

    useEffect(() => {
        (fetch("https://loremflickr.com/320/240/cat").then(res => {
            setCat(res.url);
        }))

    }, [count]);
    const update = () => {
        count++
        setCount(count)
    }

    return (
        <div className={css.wrap_item}>
            <img src={`${cat}`}  alt=""/>
            <button onClick={()=>update()}>Update</button>
        </div>
    );
};

export  {CatPage};