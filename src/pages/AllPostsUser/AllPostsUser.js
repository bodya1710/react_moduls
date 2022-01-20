import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import UserPosts from "../../components/UserPosts/UserPosts";

const AllPostsUser = () => {
    const {id} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        userService.getByPosts(id).then(value => setPosts(value))
    },[])
    return (
        <div>
            {posts.map(item=> <UserPosts key={item.id} posts={item}/>)}
        </div>
    );
};

export default AllPostsUser;