import React, {useEffect, useState} from 'react';

import css from "../style/PageStyle.module.css";

const NoteBookPage = () => {

    const [notebook, setNotebook] = useState('');
    let [count, setCount] = useState(0)

    useEffect(() => {
        (fetch("https://loremflickr.com/320/240/notebook").then(res => {
            setNotebook(res.url);
        }))

    }, [count]);
    const update = () => {
        count++
        setCount(count)
    }

    return (
        <div className={css.wrap_item}>
            <img src={`${notebook}`}  alt=""/>
            <button onClick={()=>update()}>Update</button>
        </div>
    );
};

export {NoteBookPage};