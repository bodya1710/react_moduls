import React, {useEffect, useState} from 'react';
import {takeImgService} from "../../services/takeImg.service";
import {urls} from "../../configs/urls";

const CatPage = () => {

    const [cat, setCat] = useState(null)
    // useEffect(()=>{
    //     (fetch('https://loremflickr.com/320/240/cat')
    //         .then(response => response.json())
    //         .then(json => console.log(json)))
    // },[])
    useEffect(() => {
        (fetch("https://loremflickr.com/320/240/cat").then(res => {
            setCat(res.url);
        }))
    }, []);
    return (
        <div>
            <img src={`${cat}`}  alt=""/>
        </div>
    );
};

export  {CatPage};