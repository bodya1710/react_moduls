import React, {useEffect, useState} from 'react';

import css from "../style/PageStyle.module.css";

const DogPage = () => {

    const [dog, setDog] = useState('');
    let [count, setCount] = useState(0)

    useEffect(() => {
        (fetch("https://loremflickr.com/320/240/dog").then(res => {
            setDog(res.url);
        }))

    }, [count]);
    const update = () => {
        count++
        setCount(count)
    }

    return (
        <div className={css.wrap_item}>
            <img src={`${dog}`}  alt=""/>
            <button onClick={()=>update()}>Update</button>
        </div>
    );
};

export {DogPage};