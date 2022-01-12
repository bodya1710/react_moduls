import React, {useState, useEffect} from "react";

import User from "../User/User";
import '../style/style.css';
function Users() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(item=>item.json())
            .then(item=>setUsers(item))
    },[])
    return (
        <div className={'wrap_users'}>
            {users.map(user=> <User key={user.id} id={user.id} name={user.name} username={user.username}/>)}
        </div>
    );
}
export default Users;