import React from 'react';

const AlbumPhotos = ({photo}) => {

    const {id, title, url} = photo;

    return (
        <div>
            <h2>{id}</h2>
            <p>{title}</p>
            <img src={`${url}`}  alt=""/>
        </div>
    );
};

export default AlbumPhotos;