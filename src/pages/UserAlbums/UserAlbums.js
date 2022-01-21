import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import UserAlbum from "../../components/UaerAlbum/UserAlbum";

const UserAlbums = () => {

    const [albums, setAlbums] = useState([]);

    const {id} = useParams();
    useEffect(()=>{
        userService.getByAlbums(id).then(value => setAlbums(value));
    },[id]);

    return (
        <div>
            {albums.map(item=> <UserAlbum key={item.id} album={item}/>)}
        </div>
    );
};

export default UserAlbums;