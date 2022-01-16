import React from 'react';

const UserDetails = ({user,getUserId}) => {
    return (
        <div>
            <div className={'container_user'}>
                <ul>
                    <li>Id: {user.id}</li>
                    <li>Name: {user.name}</li>
                    <li>Username: {user.username}</li>
                    <li>Email: {user.email}</li>
                    <li>Address: <ul>
                        <li>Street: {user.address.street}</li>
                        <li>suite: {user.address.suite}</li>
                        <li>City: {user.address.city}</li>
                        <li>Zipcode: {user.address.zipcode}</li>
                        <li>Geo: <ul>
                            <li>Lat: {user.address.geo.lat}</li>
                            <li>Lng: {user.address.geo.lng}</li>
                        </ul>
                        </li>
                    </ul>
                    </li>

                </ul>
            </div>
            <div className={'btn'}><button onClick={()=>getUserId(user.id)}>Get posts</button></div>
        </div>
    );
};

export default UserDetails;