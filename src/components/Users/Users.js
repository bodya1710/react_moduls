import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store/user.slice";
import {User} from "../User/User";

const Users = () => {
    const {users} = useSelector(state => state['UserReducer'])

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
    return (
        <div>
            {users.map(item=><User key={item.id} user={item}/>)}
        </div>
    );
};

export {Users};