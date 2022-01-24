import React, {useEffect, useState} from 'react';

import css from "../style/PageStyle.module.css";

const GirsPage = () => {

    const [girls, setGirls] = useState('');
    let [count, setCount] = useState(0)

    useEffect(() => {
        (fetch("https://loremflickr.com/320/240/girls").then(res => {
            setGirls(res.url);
        }))

    }, [count]);
    const update = () => {
        count++
        setCount(count)
    }

    return (
        <div className={css.wrap_item}>
            <img src={`${girls}`}  alt=""/>
            <button onClick={()=>update()}>Update</button>
        </div>
    );
};

export {GirsPage};