import React, { useState, useEffect } from 'react';

import Space from "../Space/Space";
function Spaces() {
    const [spaces, setSpaces] = useState([]);
    useEffect(() =>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(item=>item.json())
            .then(item=> setSpaces(item.filter(space => space.launch_year !== '2020')))
    },[])
    return (
        <div>
            {spaces.map(item=> <Space key={item.flight_number} name={item.mission_name} year={item.launch_year} img={item.links.mission_patch_small}/>)}
        </div>
    );
}
export default Spaces;