import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import css from "./DetailUserPage.module.css"

const DetailUserPage = () => {

    const {id} = useParams();
    const [user, setUser] = useState(null);

    const {state} = useLocation()

    useEffect(()=>{
        if(state){
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser(value))
    },[id])

    return (
        <>
            {user && (
                <div className={css.wrap_user}>
                    <div>Id: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>Username: {user.username}</div>
                    <div>Email: {user.email}</div>
                    <div>Street: {user.address.street}</div>
                    <div>Suite: {user.address.suite}</div>
                    <div>City: {user.address.city}</div>
                    <div>Zipcode: {user.address.zipcode}</div>
                    <div>lat: {user.address.geo.lat}</div>
                    <div>lng: {user.address.geo.lng}</div>
                    <div className={css.wrap_link}><Link to={'posts'}>Button</Link></div>
                </div>
            )}
            <div><Outlet/></div>
        </>
    );
};

export default DetailUserPage;