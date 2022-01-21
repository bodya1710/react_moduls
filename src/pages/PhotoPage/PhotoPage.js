import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import AlbumPhotos from "../../components/AlbumPhotos/AlbumPhotos";

const PhotoPage = () => {

    const {id} = useParams();
    const [photos, setPhotos] = useState([])
    useEffect(()=>{
        userService.getByPhotos(id).then(value => setPhotos(value));
    },[id]);

    return (
        <div>
            {photos.map(item=> <AlbumPhotos key={item.id} photo={item}/>)}
        </div>
    );
};

export default PhotoPage;